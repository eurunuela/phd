import { json, type LinksFunction, type LoaderFunction, type MetaFunction } from '@remix-run/node';
import { getProject, isFlatSite, type PageLoader } from '@myst-theme/common';
import {
  getMetaTagsForArticle,
  KatexCSS,
  ArticlePage,
  useOutlineHeight,
  useTocHeight,
  DocumentOutline,
  Navigation,
  TopNav,
  ArticlePageCatchBoundary,
} from '@myst-theme/site';
import { getConfig, getPage } from '~/utils/loaders.server';
import { useLoaderData } from '@remix-run/react';
import type { SiteManifest } from 'myst-config';
import {
  TabStateProvider,
  UiStateProvider,
  useBaseurl,
  useSiteManifest,
  useThemeTop,
  ProjectProvider,
} from '@myst-theme/providers';
import { MadeWithMyst } from '@myst-theme/icons';
import { ComputeOptionsProvider, ThebeLoaderAndServer } from '@myst-theme/jupyter';
import ChatbotWindow from './chatbot';
import { useState } from 'react';

export const meta: MetaFunction = (args) => {
  const config = args.parentsData?.root?.config as SiteManifest | undefined;
  const data = args.data as PageLoader | undefined;
  if (!config || !data || !data.frontmatter) return {};
  return getMetaTagsForArticle({
    origin: '',
    url: args.location.pathname,
    title: `${data.frontmatter.title} - ${config?.title}`,
    description: data.frontmatter.description,
    image: (data.frontmatter.thumbnailOptimized || data.frontmatter.thumbnail) ?? undefined,
  });
};

export const links: LinksFunction = () => [KatexCSS];

export const loader: LoaderFunction = async ({ params, request }) => {
  const [first, second] = new URL(request.url).pathname.slice(1).split('/');
  const projectName = second ? first : undefined;
  const slug = second || first;
  const config = await getConfig();
  const project = getProject(config, projectName ?? slug);
  const flat = isFlatSite(config);
  const page = await getPage(request, {
    project: flat ? projectName : projectName ?? slug,
    slug: flat ? slug : projectName ? slug : undefined,
    redirect: process.env.MODE === 'static' ? false : true,
  });
  return json({ page, project });
};

type ManifestProject = Required<SiteManifest>['projects'][0];

export function ArticlePageAndNavigation({
  children,
  hide_toc,
  projectSlug,
  inset = 20, // begin text 20px from the top (aligned with menu)
}: {
  hide_toc?: boolean;
  projectSlug?: string;
  children: React.ReactNode;
  inset?: number;
}) {
  const top = useThemeTop();
  const { container, toc } = useTocHeight(top, inset);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <UiStateProvider>
      <TopNav />
      <Navigation
        tocRef={toc}
        hide_toc={hide_toc}
        footer={<MadeWithMyst />}
        projectSlug={projectSlug}
      />
      {/* Only show chatbotwindow if chatOpen is true */}
      {chatOpen && <ChatbotWindow chatOpen={chatOpen} setChatOpen={setChatOpen} />}
      {/* Make the button clicbale */}
      <TabStateProvider>
        <article
          ref={container}
          className="article content article-grid grid-gap"
          style={{ marginTop: top }}
        >
          {children}
        </article>
      </TabStateProvider>
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed px-4 py-2 text-white bg-blue-500 rounded-full mb-16 mr-16 z-[100] bottom-4 right-4 max-[770px]:w-[80%] max-[770px]:px-4 max-[770px]:right-0 max-[770px]:left-0 max-[770px]:ml-auto max-[770px]:mr-auto"
      >
        Ask the AI
      </button>
    </UiStateProvider>
  );
}

interface BookThemeTemplateOptions {
  hide_toc?: boolean;
  hide_outline?: boolean;
  hide_footer_links?: boolean;
  outline_maxdepth?: number;
}

export default function Page() {
  const { container, outline } = useOutlineHeight();
  const top = useThemeTop();
  const data = useLoaderData() as { page: PageLoader; project: ManifestProject };

  const baseurl = useBaseurl();
  const pageDesign: BookThemeTemplateOptions = (data.page.frontmatter as any)?.options ?? {};
  const siteDesign: BookThemeTemplateOptions =
    (useSiteManifest() as SiteManifest & BookThemeTemplateOptions)?.options ?? {};
  const { hide_toc, hide_outline, hide_footer_links, outline_maxdepth } = {
    ...siteDesign,
    ...pageDesign,
  };

  return (
    <ArticlePageAndNavigation hide_toc={hide_toc} projectSlug={data.page.project}>
      {/* <ProjectProvider project={project}> */}
      <ProjectProvider>
        <ComputeOptionsProvider
          features={{ notebookCompute: true, figureCompute: true, launchBinder: false }}
        >
          <ThebeLoaderAndServer baseurl={baseurl}>
            <main ref={container} className="article-grid subgrid-gap col-screen">
              {!hide_outline && (
                <div
                  className="sticky z-10 hidden h-0 col-margin-right-inset lg:block"
                  style={{ top }}
                >
                  <DocumentOutline
                    top={16}
                    className="relative"
                    outlineRef={outline}
                    maxdepth={outline_maxdepth}
                  />
                </div>
              )}
              <ArticlePage article={data.page} hide_all_footer_links={hide_footer_links} />
            </main>
          </ThebeLoaderAndServer>
        </ComputeOptionsProvider>
      </ProjectProvider>
    </ArticlePageAndNavigation>
  );
}

export function CatchBoundary() {
  return (
    <ArticlePageAndNavigation>
      <main className="article">
        <ArticlePageCatchBoundary />
      </main>
    </ArticlePageAndNavigation>
  );
}

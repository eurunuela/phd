// queryEngine.tsx
import dotenv from 'dotenv';
import {
  Document,
  VectorStoreIndex,
  SimpleDirectoryReader,
  RouterQueryEngine,
  storageContextFromDefaults,
  ContextChatEngine,
} from 'llamaindex';

dotenv.config(); // load environment variables

let chatEngine;

async function storeContext() {
  return await storageContextFromDefaults({
    persistDir: './storage',
  });
}

async function getIndices(storageContext) {
  let index;
  // Get documents from the data directory of the storage is empty
  // if (storageContext === undefined) {
  const documents = await new SimpleDirectoryReader().loadData({
    directoryPath: './data',
  });

  // index = await VectorStoreIndex.fromDocuments(documents, { storageContext });
  // } else {
  index = await VectorStoreIndex.init({ storageContext: storageContext });
  // }

  return index;
}

async function initializeQueryEngine() {
  const keys = process.env; // read API key from .env

  const storageContext = await storeContext();

  const index = await getIndices(storageContext);

  // queryEngine = index.asQueryEngine();
  const retriever = index.asRetriever();
  retriever.similarityTopK = 3;

  chatEngine = new ContextChatEngine({
    retriever,
  });
}

const getQueryEngine = async () => {
  if (!chatEngine) {
    await initializeQueryEngine();
  }
  return chatEngine;
};

export { getQueryEngine };

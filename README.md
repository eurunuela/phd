---
license: "CC-BY-NC-SA-4.0"
thumbnail: figures/thumbnail.png
---
# Unraveling Hidden Patterns of Brain Activity: A Journey Through Hemodynamic Deconvolution in Functional MRI

:::{note} Welcome to my PhD dissertation!

Thank you for your interest in my work. This website is a summary of my PhD dissertation and is the
**perfect place to learn about hemodynamic deconvolution in functional MRI**: a technique that allows
you to blindly estimate the neuronal-related activity without any knowledge of the timings of the
neuronal events.
:::

## The thesis defense presentation

<iframe src="https://player.vimeo.com/video/935334650?h=9bd47d083a" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
[Also available here](https://vimeo.com/935334650).

## The different chapters

If you are interested in learning about the current background of the analysis of resting-state
functional MRI data, please refer to [](#cha-intro).

If you are interested in learning about hemodynamic deconvolution and how it works, please refer
to [](#cha-synthesis-analysis).

If you are interested in learning how you can make your estimates more robust without having to
select a fixed value for the regularization parameter $\lambda$, please refer to [](#cha-stability)
and [](#cha-multivariate).

If you want to learn how you can exploit spatial information to improve your estimates of the
activity-inducing signal, please refer to [](#cha-multivariate).

If you are interested in employing hemodynamic deconvolution to study the shared and individual responses
of a group of subjects in a naturalistic paradigm, please refer to [](#cha-multi-subject).

Finally, if you are interested in learning how you can reduce the bias of global components like
the global signal or respiration-related artifacts from your estimates of neuronal-related
activity, please refer to [](#cha-low-rank).

## How to use the Python packages

If you are interested in using the Python packages I developed during my PhD, please refer to the
[Paradigm Free Mapping organization on
GitHub](https://github.com/orgs/Paradigm-Free-Mapping/repositories) or click on the `Packages`
button on the top right corner of this page.

To install the individual packages, you can use the following commands:

::::{tab-set}
:::{tab-item} pySPFM

```bash
pip install pySPFM
```
:::
:::{tab-item} splora

```bash
pip install splora
```
:::
:::{tab-item} msPFM

`msPFM` will be available soon. Please stay tuned and follow [eurunuela](https://x.com/eurunuela)
on X for updates.
:::
::::

## How to cite our work if you used one of our Python packages

Select a tab below to see the citation information for the package you used.

::::{tab-set}
:::{tab-item} pySPFM

Please cite the following if you use the package on single-echo data:

- [](https://zenodo.org/doi/10.5281/zenodo.6600095)
- [](https://doi.org/10.1002/hbm.21452)
- [](https://doi.org/10.52294/001c.87574)

If you use the package on multi-echo data, please cite the following:

- [](https://zenodo.org/doi/10.5281/zenodo.6600095)
- [](https://doi.org/10.1016/j.neuroimage.2019.116081)
- [](https://doi.org/10.52294/001c.87574)

If you use stability selection, please cite the following as well:

- [](https://doi.org/10.1109/embc44109.2020.9176137)

:::
:::{tab-item} splora

Please cite the following if you use the package:

- [](https://zenodo.org/doi/10.5281/zenodo.6603447)

If you use the package without using the low-rank model, please add the following citation as well:

- [](https://doi.org/10.1016/j.media.2023.103010)

If you do use the sparse & low-rank model, pleasee add the following citation:

- [](https://doi.org/10.1109/isbi48211.2021.9433821)

:::
:::{tab-item} msPFM

`msPFM` will be available soon. Please stay tuned and follow [eurunuela](https://x.com/eurunuela)
on X for updates.

:::
::::

## Acknowledgements

I would like to thank the [Signal Processing in Neuroimaging
(SPiN)](https://bcbl.eu/en/research/research-groups/signal-processing-neuroimaging) lab at the
[Basque Center on Cognition, Brain and Language (BCBL)](https://bcbl.eu/en) for their support and
guidance throughout my PhD and I would like to especially thank my supervisors, [Dr. César
Caballero-Gaudes](https://bcbl.eu/en/conocenos/equipo/cesar-caballero-gaudes) and Dr. Miguel Ángel Veganzones,
for their support and guidance.

## Feedback

If you have any feedback or questions, please feel free to reach out to me at
[eurunuela](https://x.com/eurunuela) on X or by opening an issue on the GitHub repository of the
package you used.

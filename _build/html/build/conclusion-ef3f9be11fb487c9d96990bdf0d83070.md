(cha-conclusion)=
# Chapter 7: Conclusion and future directions

## Summary and Final Discussion

As mentioned in {ref}`the introduction <cha-intro>`, conventional single trial fMRI analysis relies
heavily on preexisting knowledge of event timing
[@Buckner1996Detectioncorticalactivation;@Menon1998Mentalchronometryusing;@Richter1997TimeresolvedfMRI].
However, in certain situations such as clinical settings, resting-state, or naturalistic paradigms,
it can be challenging or even impossible to formulate a temporal model of activations. This thesis
has introduced new fMRI analysis techniques that allow for the study of true single trial BOLD
responses without any prior information about the event timings. These methods greatly improve upon
the Paradigm Free Mapping (PFM) approach [@Gaudes2013Paradigmfreemapping], and extend its
capabilities to include multivariate and multi-subject settings.

In {ref}`Chapter 2 <cha-synthesis-analysis>`, the underlying motivations and principles of PFM and
hemodynamic deconvolution are discussed. Additionally, the chapter also delved into existing fMRI
analysis methods that aim to conduct single trial experiments without the need for precise or null
specifications of the experimental paradigm. Notably, Total Activation (TA) was highlighted as a
leading deconvolution technique that follows an analysis formulation, in contrast to the synthesis
formulation of PFM. The chapter also introduced the block model for PFM, which allows for the
estimation of the innovation signal --the derivative of the activity-inducing signal. This approach
is especially useful for block-design experiments and utilizes the sparsity constraint of the LASSO
more effectively. After thorough comparison, it was found that the two methods are essentially
equivalent, with PFM emerging as the preferred option due to its simplistic and adaptable
formulation. This paved the way for the development of various PFM techniques in this thesis,
including {ref}`stability-based PFM <cha-stability>`, {ref}`multivariate PFM <cha-multivariate>`,
{ref}`multi-subject PFM <cha-multi-subject>`, and {ref}`sparse and low-rank PFM <cha-low-rank>`.

A crucial aspect for achieving satisfactory operation of the PFM techniques is the accurate
selection of the regularization parameters, as the deconvolution relies on regularized estimators.
In the original PFM techniques [@Gaudes2013Paradigmfreemapping], the choice of the regularization
parameter $\lambda$ was determined using Akaike and Bayesian information criteria independently for
each voxel. {ref}`Chapter 3 <cha-stability>` introduced an alternative approach based on stability
selection, which eliminates the need for selecting this parameter altogether. Moreover, this new
procedure offers an additional metric, defined as the area under the curve of the stability path,
that represents the likelihood of the detected events being true at the finest spatial and temporal
scales.

{ref}`Chapter 4<cha-multivariate>` presented a novel approach to the PFM methodology, introducing a
multivariate formulation that organizes voxel or ROI time series into a matrix and incorporates the
stability selection procedure. By combining these two techniques with the use of the $\ell_1 +
\ell_{2,1}$ mixed norm group sparsity regularization --which incorporates spatial information and
interactions into the formulation-- the chapter showcased the enhanced performance of the
multivariate PFM with stability selection in comparison to the original univariate formulation of
PFM. Notably, this method yielded results that were more concordant with single-trial GLM findings.
Additionally, the chapter demonstrated the robustness of the approach across both single-echo and
multi-echo fMRI data. This was achieved through the utilization of the area under the curve (AUC)
measure, which facilitated the application of various thresholding techniques adaptable to the
noise level inherent in the data.

{ref}`Chapter 5 <cha-multi-subject>` introduced a new application of the multivariate PFM
formulation: simultaneous deconvolution of multiple subjects performing a naturalistic paradigm. In
this case, instead of concatenating voxels or ROIs to form a time by space matrix, the same voxel
or ROI from different subjects was used to create a time by subject matrix. The underlying
assumption is that the estimation of neuronal-related activity should not be significantly affected
by anatomical and functional differences between subjects once their data has been aligned to a
shared space or template. This assumption holds true when analyzing data at the ROI level, where
differences are smoothed out during averaging and spatial resolution is reduced. However, when
working with voxels, this assumption no longer holds, and differences across subjects are expected.
Due to the immense computational cost and memory requirements of simultaneously deconvolving 43
subjects at the voxel level, the analysis in this chapter was performed at the ROI level, where the
assumption remained valid. The results demonstrated the capability of the multi-subject PFM (msPFM)
algorithm to detect shared and individualized neuronal-related activity across subjects without
prior knowledge. Furthermore, the technique successfully linked moment-to-moment brain activity to
its underlying causes. Encouragingly, the group synchrony metric showed significant correlations
with changes in luminance, audio, speech, the presence of hands, and the presence of faces.
Importantly, msPFM was able to adapt to different movies. For example, in the movie "Iteration,"
where a single character's face was frequently shown, the group synchrony metric correlated with
the presence of faces in left middle temporal gyrus, which is associated with face familiarity and
gaze. In contrast, in the movie "Sherlock," where multiple characters appeared and facial
identification was more challenging, the group synchrony metric correlated with changes in the
presence of faces in the fusiform face areas. These findings indicate that participants may have
adapted to certain characteristics of the stimuli, such as luminance and the presence of faces, and
that the msPFM estimates were able to capture this adaptation. Although these results are
promising, many questions still remain unanswered. For instance, utilizing msPFM could help us
understand how the human brain comprehends complex multiplexed signals and identify the specific
stimulus features that elicit responses. Furthermore, msPFM has the potential to elucidate the
connection between individual differences in these responses and subsequent memory formation or
appraisal of the stimulus.

In {ref}`Chapter 6 <cha-low-rank>`, the nuclear norm was employed as an additional regularization
term in the multivariate PFM formulation. This term effectively tackles the issue of global
fluctuations in the BOLD signal, including motion-related signals and physiological artifacts,
which can distort the deconvolution of neuronal-related activity. By employing the sparse and
low-rank PFM algorithm, the method successfully mitigated this bias, resulting in an accurate
estimation of the activity-inducing signal. Notably, the results exhibited a remarkable similarity
between the sparse and low-rank PFM algorithm and the single-trial GLM results in detecting
neuronal-related activity in a complex dataset characterized by numerous conditions in the
experimental task. When the regularization parameter $\lambda$ was manually selected, the algorithm
performed comparably to the multivariate PFM. However, the selection of the regularization
parameter for the nuclear norm penalty in the sparse and low-rank PFM posed a significant
challenge, which will be addressed in the subsequent section. Given the success of the stability
selection procedure in {ref}`Chapter 3 <cha-stability>` and {ref}`Chapter 4 <cha-multivariate>`, it is worth exploring its
adaptation for this algorithm to avoid selecting all three regularization parameters.

Overall, these series of studies demonstrate that PFM techniques can be used to
reliably retrieve the neuronal-related activity from fMRI data without any prior
information about the experimental paradigm, and that there now exists a
formulation of PFM that is suitable for potentially any experimental setting and
research question.

Finally, the code used for all the research and algorithms presented in this thesis was written in
Python. To promote the use of the PFM techniques developed within this thesis, three separate
Python packages have been created and made available as open source software: `pySPFM` for the
univariate analysis and as the core library for the other two, `splora` for the multivariate and
sparse and low-rank PFM, and `msPFM` for the multi-subject version of PFM. The packages are
available on GitHub at
[https://github.com/paradigm-free-mapping](https://github.com/paradigm-free-mapping) and can be
installed using the Python package manager `pip`.

## Future Developments

This thesis showcases research findings that emphasize certain aspects deserving further
developments or refinement. First of all, this thesis assumed an identical hemodynamic response
model for the entire brain. However, the waveform of the hemodynamic response function (HRF) is
known to vary across voxels within cortical regions, across cortical regions, and across subjects
[@Aguirre1998VariabilityHumanBOLD;@Handwerker2004VariationBOLDhemodynamic;@Miezin2000CharacterizingHemodynamicResponse;@Zwart2005TemporaldynamicsBOLD;@Saad2001AnalysisuseFMRI],
potentially reflecting different local distributions of vascular anatomy and neurovascular
coupling. Therefore, employing prior information about the HRF would allow a more precise
estimation of neuronal-related events. Its implementation is straightforward in the case of the
univariate formulation of PFM. However, the use of voxel- or region-specific HRFs is not as
straightforward in a multivariate scenario. An alternative solution would be to apply the
multivariate PFM technique within ROIs using an ROI-specific HRF. An alternative strategy would be
to adaptively model the HRF by including the temporal and dispersion derivatives of the assumed
canonical HRF in the Toeplitz matrix of the deconvolution model
[@Gaudes2012Structuredsparsedeconvolution].

Another area of focus to improve PFM is the integration of new regularization
terms to mitigate the bias associated with the $\ell_1$-norm. In cases where a
grouping sparsity constraint is not applied or when dealing with the univariate
PFM, an effective method would be to implement regularization with the
$\ell_0$-norm. However, this presents a challenge as the optimization problem
associated with the $\ell_0$-norm is known to be a non-convex, NP hard problem.
In such cases, an alternative solution could be to utilize $\ell_{0.5}$-norm
regularization instead. For the multivariate formulations, a viable option would
be to adopt the OSCAR (octagonal selection and clustering algorithm for
regression) regularizer. This method involves the use of a combination of
$\ell_1$ and pair-wise $\ell_{\infty}$-norms, which is responsible for its
grouping behavior. This approach was proposed to promote group sparsity in
situations where the groups are not known beforehand
[@Bondell2008SimultaneousRegressionShrinkage;@Gueddari2021CalibrationLessMulti].

The multivariate formulation of PFM has introduced a significant advancement by
enabling the incorporation of spatial information and interactions into the
estimation of neuronal-related activity. This opens up possibilities for
enhancing the estimation process. For example, the matrix representing the
estimated activity-inducing signal $\mathbf{S}$ could be multiplied by a
connectivity matrix that represents the interactions between voxels or ROIs in
the penalty term. This connectivity matrix could be obtained from other imaging
modalities, either structural connectivity from diffusion-weighted MRI or
functional connectivity from complementary electrophysiological recordings
(e.g., EEG or MEG).

The main limitation of the current multi-subject PFM approach is the assumption that the anatomical
and hemodynamic differences between subjects do not significantly affect the estimation of
neuronal-related activity when all the data is moved into a shared space. This assumption holds to
some extent when working with ROIs, where spatial resolution is reduced and finer anatomical
differences across subjects are smoothed out during averaging. However, this assumption no longer
holds striclty in the case of operating at the voxel level. In other words, a perfect anatomical
alignment and voxel-to-voxel correspondence in the location of activations cannot be assumed across
different subjects. To address the issue of inter-subject spatial variability of functional
activations, optimal transport theory could be adopted. This approach, as demonstrated in
[@Gramfort2015FastOptimalTransport;@Janati2019Wassersteinregularizationsparse;@Janati2020MultisubjectMEG/EEG],
does not require exact spatial correspondence between neuronal-related events in the group of
subjects. Instead, it compares the estimates by considering the geodesic distances between their
locations. Furthermore, to tackle the sources of invariance arising from shifts in time, space, and
total population size, a more sophisticated formulation that integrates dynamic time warping and
unbalanced optimal transport could be considered [@Janati2022AveragingSpatiotemporal].

Furthermore, the selection of the regularization parameter for the nuclear norm in the sparse and
low-rank PFM poses a significant challenge. In this thesis, a fixed number of low rank components
was chosen as the criterion for selection. However, if functional activations are widespread, this
approach may mistakenly classify components resembling BOLD responses as a low-rank, global
components. Alternatively, one could consider using a more liberal value for the regularization
parameter and then employ a decision tree to distinguish between global and neuronal-related
components. For instance, such a decision tree could be developed by drawing inspiration from the
ICA AROMA [@Pruim2015ICAAROMArobust] or ICA FIX [@SalimiKhorshidi2014Automaticdenoisingfunctional]
methods. Moreover, the application of the low-rank and sparse PFM to resting-state fMRI data
remains to be studied.

Future research should also consider the development of deep learning methods for fMRI
deconvolution based on physical models of the BOLD signal. Convolutional neural networks (CNNs)
have gained significant attention due to their exceptional performance in object classification and
segmentation tasks, achieved through training on large image databases. Inspired by these
achievements, CNNs have been applied to various inverse problems in imaging, such as denoising,
deconvolution, superresolution, and medical image reconstruction
[@McCann2017ConvolutionalNeuralNetworks;@Wang2020Multiresolutionconvolutional]. These applications
have demonstrated promising results, surpassing state-of-the-art techniques, including compressed
sensing. Consequently, the implementation of CNNs in PFM techniques has the potential to enhance
the accuracy of neuronal-related activity estimates. However, these models are very expensive to
train as they require large amounts of data and computational power. Hence, physics-based and
self-supervising models could be explored for the development of PFM's deep learning counterparts
[@Lucas2018UsingDeepNeural;@LopezTapia2021Deeplearningapproaches;@Hammernik2023PhysicsDrivenDeep;@Aggarwal2019MoDLModelBased].

Finally, the availability of the Python libraries for researchers is crucial.
However, in order to promote wider adoption of the PFM techniques, it is
essential that these libraries are well documented and include numerous usage
examples. Therefore, the development of a comprehensive documentation and
tutorial is a priority for the near future.

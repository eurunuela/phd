# Abstract

Functional magnetic resonance imaging data analysis is often directed to
identify and disentangle the neural processes that occur in different brain
regions during task or at rest, and employs the blood oxygen level dependent
(BOLD) signal of fMRI as a proxy for neuronal activity mediated through
neurovascular coupling. The goal of this thesis is to enhance and expand
techniques for identifying and analyzing individual trial event-related BOLD
responses based on the Paradigm Free Mapping (PFM) algorithm, which utilizes a linear
hemodynamic response model and relies on regularized least squares estimators to
deconvolve the neuronal-related signal that drives the BOLD effect. Notably,
these techniques estimate neuronal-related activity without relying on prior
paradigm information.

First of all, this work aims to establish the equivalence between the
synthesis-based PFM and analysis-based Total Activation (TA) algorithms. Then,
the thesis addresses the challenge of selecting the regularization parameter.
This was accomplished by employing the stability selection procedure, which
provides a measure of the likelihood that the estimated neuronal-related events
are accurate. Building upon this, the next goal of this work is to extend the
original univariate PFM formulation to a multivariate context, enabling the
incorporation of spatial information through regularization terms such as the
$\ell_1 + \ell_{2,1}$ mixed-norm regularization. Expanding further, the third
objective of this thesis is to extend the multivariate PFM formulation to a
multi-subject framework, facilitating the estimation of shared and
individualized neuronal-related activity across subjects. This approach proved
particularly suitable for naturalistic fMRI experiments. Lastly, the fourth and
last goal of this work is to introduce an additional regularization term, the
nuclear norm, into the multivariate PFM formulation. This term was employed to
estimate global fluctuations during the deconvolution process and mitigate their
impact on the estimation of neuronal-related activity, thereby reducing bias.

The techniques presented in this thesis were thoroughly evaluated using
simulations and experimental fMRI datasets. Comparisons were made with
established fMRI analysis methods, including the single-trial
general linear model, previous PFM algorithms, and other
state-of-the-art techniques. Notably, the developed methods demonstrated the
ability to accurately detect single trial BOLD responses in resting-state and
naturalistic fMRI data, without relying on prior event information.
Additionally, the potential application of multi-subject PFM in
identifying both shared and individualized neuronal-related activity in more
ecological datasets was explored, yielding promising results. Moreover, the
utilization of low-rank and sparse PFM facilitated the extraction of
global fluctuations, such as the global signal, physiological fluctuations, and
motion artifacts, thereby reducing their influence on the analysis. In summary,
this work demonstrates that PFM techniques can be used to reliably
retrieve the neuronal-related activity from fMRI data without any prior
information about the experimental paradigm, and that there now exists a
formulation of PFM that is suitable for potentially any experimental
setting and research question.

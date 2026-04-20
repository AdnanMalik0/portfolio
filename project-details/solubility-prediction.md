# ML for Solubility Prediction of Chemical Compounds

Source GitHub Repository: <https://github.com/AdnanMalik0/ML-for-Solubility-Prediction>

## Snapshot

This MSc dissertation focused on predicting the aqueous solubility of chemical compounds using machine learning under conditions of noisy experimental data. The project stands out because it treats solubility prediction as both a modelling problem and an uncertainty problem, rather than assuming the target labels are perfectly clean.

## Goal

The objective was to identify which machine learning approaches are most effective for solubility prediction while accounting for unavoidable experimental error and redundant molecular descriptors.

## What Was Built

- A dissertation-scale modelling workflow covering 14 machine learning models
- Five modelling families: linear regression, latent-variable, ensemble, kernel-based, and neural-network approaches
- A structured pipeline covering data checks, feature screening, train-test splitting, 10-fold cross-validation, and hyperparameter tuning
- Final prediction through a consensus-of-crowd style combination of the top-performing models

## Methods and Technical Decisions

- Feature selection was treated as an important part of performance, not a side task
- `G_sol` and `volume` were removed in the main workflow because of very high correlation with other descriptors
- `SASA` was tested as a removable feature but ultimately retained because it appeared to contribute useful independent information
- Multiple notebooks were kept to compare how performance changed when highly correlated features were retained or removed
- Model assessment explicitly considered experimental uncertainty in the target data

## Evaluation

The project evaluated model performance using:

- RMSE
- Pearson's `r^2`
- `%LogS +/- 0.7`
- `%LogS +/- 1.0`

These measures were used to reflect both standard predictive accuracy and tolerance for unavoidable measurement error in solubility experiments.

## Evidence Included

- A full dissertation documenting the research question, modelling choices, experiments, and findings
- A main notebook containing the core modelling workflow and evaluation outputs
- Comparison notebooks showing how feature-retention choices affected predictive performance
- A structured scientific dataset for solubility prediction

## Result / Outcome

Prediction quality improved through three main decisions: focusing on relevant descriptors, evaluating models in a way that respected experimental uncertainty, and taking a consensus of the best-performing models for final prediction. The study also showed that careful feature refinement reduced redundancy without sacrificing important chemical information.

## Portfolio Takeaway

This is one of the strongest research projects in the portfolio because it combines scientific context, model breadth, disciplined evaluation, and a consensus-of-crowd final prediction strategy. It shows depth in benchmarking, feature reasoning, and practical handling of noisy real-world data.

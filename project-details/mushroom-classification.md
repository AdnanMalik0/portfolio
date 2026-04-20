# Mushroom Classification: Edible or Poisonous

Source material: statistical learning coursework report

## Snapshot

This statistical-learning project focused on classifying mushrooms as edible or poisonous using tree-based methods in R. The work combined model tuning, feature-importance analysis, and risk-aware interpretation in a high-stakes classification setting.

## Goal

The objective was to develop classifiers that best distinguish edible from poisonous mushrooms, identify the most influential features, and evaluate how trustworthy the models are when wrong edible predictions could be dangerous.

## What Was Built

- A decision-tree classifier tuned with 10-fold cross-validation
- A random-forest classifier for performance comparison
- Feature-importance analysis across mushroom attributes
- Model interpretation focused on reliability and false-positive risk

## Variables and Features Mentioned

- `Edible`
- `CapShape`
- `CapSurface`
- `CapColor`
- `Odor`
- `Height`

## Methods Covered

- Decision-tree modelling with complexity tuning
- Random-forest modelling and comparison
- 10-fold cross-validation
- Feature-importance interpretation
- Risk analysis for false-positive edible predictions

## Result / Outcome

Both models correctly classified the large majority of mushrooms, and `Height` was identified as a weak feature with limited predictive value. The project also highlighted that even a small false-positive rate is serious in this domain because poisonous mushrooms incorrectly predicted as edible create real-world risk.

## Portfolio Takeaway

This project strengthens the portfolio on classical ML and statistical learning. It shows model selection, tree-based interpretation, and awareness that classification accuracy alone is not enough in high-stakes decision settings.

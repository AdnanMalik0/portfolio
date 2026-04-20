# Brexit Vote Analysis With Logistic Regression

Source material: statistical learning assignment brief

## Snapshot

This note is based on an assignment brief rather than a finished project report. The brief defines a classification problem around the 2016 Brexit referendum using demographic features at electoral-ward level.

## Goal

The objective was to use logistic regression to identify which demographic variables best explain whether a ward voted for Brexit, then compare model interpretation against public media commentary.

## Analysis Defined In The Source

- Logistic regression on `voteBrexit` as a `TRUE/FALSE` outcome
- Cross-validation across different input-variable combinations
- Coefficient interpretation for effect direction and magnitude
- Comparison of model findings against Guardian visual analysis
- Consideration of scale, correlation, and confidence intervals for interpretability

## Variables Mentioned

- `abc1`
- `medianIncome`
- `medianAge`
- `withHigherEd`
- `notBornUK`
- `voteBrexit`

## Why It Matters

The brief is a solid example of interpretable statistical modelling on public-policy data, particularly because it focuses on explanatory power, variable selection, and the limits of media-level visual interpretation.

## Status Note

Because this source is an assignment brief, not a completed submission, this file should be treated as a source-summary note rather than a final portfolio-ready proof of implementation.

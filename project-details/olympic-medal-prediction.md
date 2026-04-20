# Olympic Medal Prediction With Statistical Learning

Source material: statistical learning assignment brief

## Snapshot

This note is based on an assignment brief rather than a finished project report. The brief defines a statistical-learning exercise focused on predicting Olympic medal counts from national population and GDP.

## Goal

The objective was to analyse how medal counts relate to population and economic strength, test several count/regression models, and compare their predictive performance for later Olympic results.

## Analysis Defined In The Source

- Linear regression on raw medal counts
- Linear regression on log-transformed medal counts
- Poisson regression
- Negative Binomial regression with sensitivity testing across `theta` values
- Model selection across the above approaches
- Outlier analysis and prediction-vs-actual comparison for 2016 results

## Data Inputs Mentioned

- `medal_pop_gdp_data_statlearn.csv`
- Country name
- Population
- GDP in billions of US dollars
- Medal counts for Beijing 2008, London 2012, and Rio 2016

## Why It Matters

The brief frames a useful analytics problem around regression-model choice, count-data assumptions, transformation effects, and predictive evaluation under different statistical formulations.

## Status Note

Because this source is an assignment brief, not a completed submission, this file should be treated as a source-summary note rather than a final portfolio-ready proof of implementation.

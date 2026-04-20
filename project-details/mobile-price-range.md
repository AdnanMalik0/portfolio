# Mobile Phone Price-Range Prediction

Source GitHub Repository: <https://github.com/AdnanMalik0/Mobile-price-range-prediction>

## Snapshot

This project combines exploratory data analysis and supervised classification to predict mobile phone price range from technical and hardware-related features. It uses structured product data and treats the work as both a feature-understanding exercise and a prediction task.

## Goal

The project aimed to understand how different mobile-phone features relate to price range, test those relationships statistically, and then use that understanding to build a supervised classification workflow.

## Data Used

The GitHub Repository uses a Kaggle mobile-price dataset divided into:

- `mobile_train.csv` with 2,000 rows and 21 columns
- `mobile_test.csv` with 1,000 rows and 21 columns

The training data includes the target variable `price_range`, while the test data does not.

## Feature Scope

The feature set includes:

- battery power
- memory and RAM
- processor-related variables such as clock speed and number of cores
- screen dimensions and pixel resolution
- connectivity indicators such as Bluetooth, 3G, 4G, and Wi-Fi
- camera and physical device characteristics

## What Was Built

- Exploratory analysis of feature relationships
- Correlation analysis between device attributes and price range
- Statistical testing using ANOVA to validate whether selected features materially relate to price range
- A supervised classification workflow using the labelled training data
- Evaluation using separate training and test datasets

## Evidence Included

- A full notebook covering exploratory analysis, statistical testing, and classification
- A structured labelled dataset and separate holdout test data
- A supporting workflow diagram showing the project pipeline

## Result / Outcome

The project established a full tabular-ML workflow that moved from feature understanding to statistical validation and then to classification. It showed how exploratory analysis and ANOVA can both be used to identify which hardware features matter most before building a predictive model.

## Portfolio Takeaway

This is a solid applied machine-learning project because it combines problem framing, data understanding, and supervised classification on a realistic feature-rich dataset.

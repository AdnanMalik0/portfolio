# Image Classification with Convolutional Neural Networks

Source material: AI coursework submission

## Snapshot

This coursework project focused on image classification with convolutional neural networks using `TinyImageNet30`, a 30-class subset of Tiny ImageNet. It combined model construction, training, regularisation, and visual interpretation of learned representations.

## Goal

The objective was to build and refine a CNN for multi-class image classification, then understand what the network learned by visualising filters and feature maps from a pre-trained model.

## What Was Built

- A CNN for image classification on `TinyImageNet30`
- A PyTorch workflow covering dataset preparation, model definition, training, and evaluation
- Fine-tuned variants using augmentation, dropout, and additional convolutional depth
- Visual analysis of filters and feature maps from a pre-trained `AlexNet`

## Workflow Covered

- Dataset preparation and model training on `TinyImageNet30`
- Single-batch overfitting checks before full-dataset training
- Regularisation and fine-tuning with augmentation and dropout
- Validation-driven comparison between baseline and improved models
- Visual inspection of first-layer filters and deeper feature maps

## Evidence Included

- A full coursework submission showing model development, tuning, and interpretation
- A 30-class Tiny ImageNet subset used for supervised image classification
- Visual analysis using a pre-trained CNN to interpret learned filters and feature maps

## Result / Outcome

The initial model overfit the training data and performed poorly on validation data. Data augmentation and dropout improved validation performance and reduced overfitting, while the feature-map inspection helped explain how deeper CNN layers capture more abstract visual structure.

## Portfolio Takeaway

This is a strong deep-learning project because it goes beyond simply training a classifier. It shows practical CNN development, regularisation, error diagnosis, and interpretability through filter and feature-map analysis.

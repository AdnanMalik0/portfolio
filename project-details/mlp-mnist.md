# MLP Classification with PyTorch (MNIST)

Source GitHub Repository: <https://github.com/AdnanMalik0/MLP-Classification-with-Pytorch>

## Snapshot

This project implements handwritten digit classification on the MNIST dataset using multi-layer perceptrons in PyTorch. It is a practical neural-network exercise focused on understanding the full workflow from tensor preparation to model comparison.

## Goal

The aim was to build and compare simple feedforward neural networks for MNIST digit classification while keeping the training process transparent and reproducible.

## What Was Built

- A PyTorch notebook for reading MNIST image data and converting it to tensors
- A one-layer MLP baseline built with `torch.nn`
- A two-layer variant to compare against the simpler baseline
- A training workflow using cross-entropy loss and stochastic gradient descent
- Saved model checkpoints and training-loss output for comparison

## Technical Focus

- Vectorising `28 x 28` image inputs with `nn.Flatten`
- Building models with `nn.Sequential`
- Training with cross-entropy loss
- Optimising with SGD
- Comparing one-layer and two-layer architectures to understand how model structure changes behaviour

## Evidence Included

- A full PyTorch notebook implementing the training workflow
- Saved trained models for the one-layer and two-layer network variants
- Training-loss output for comparing learning behaviour
- Standard MNIST digit data used for the classification task

## Learning / Outcome

The project provided practical exposure to implementing, training, and comparing neural-network classifiers in PyTorch. It was especially useful for understanding how simple architecture changes affect classification behaviour and training dynamics.

## Portfolio Takeaway

This project is valuable because it shows direct familiarity with PyTorch fundamentals rather than only high-level ML tooling. It demonstrates model construction, optimisation, and experimental comparison in a clean and readable setup.

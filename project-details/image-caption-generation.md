# Image Caption Generation

Source material: AI coursework submission

## Snapshot

This project built an end-to-end image captioning system in Python and PyTorch using `COCO_5029`, a subset of the COCO dataset containing 5,029 images with multiple reference captions. It combines computer vision, NLP preprocessing, sequence modelling, and metric-based evaluation in a single workflow.

## Goal

The objective was to generate captions for images by pairing a pre-trained visual encoder with a recurrent text decoder, then evaluate caption quality against multiple human-written references.

## What Was Built

- An encoder-decoder captioning pipeline in PyTorch
- A pre-trained `ResNet-152` visual encoder for extracting image features
- An RNN-based decoder for sequence generation
- A caption-preparation workflow covering text cleaning, vocabulary construction, and train-validation-test splitting
- Prediction and evaluation logic comparing generated captions with reference captions

## Workflow Covered

- Feature extraction from the `COCO_5029` image subset
- Text preprocessing and lowercase caption cleaning
- Vocabulary building from training captions
- Split control so each image belongs to only one of train, validation, or test
- Decoder training and caption generation
- Evaluation using BLEU score and cosine similarity

## Evidence Included

- A full coursework submission showing the end-to-end implementation
- COCO-subset image metadata and caption data used for training and evaluation
- Separate training, validation, and test caption splits

## Result / Outcome

The coursework showed that BLEU and cosine similarity can behave very differently for the same poor prediction. That was an important finding because it highlighted why caption quality should not be judged with only one metric when evaluating sequence-generation models.

## Portfolio Takeaway

This is a strong hybrid AI project because it spans both vision and language. It demonstrates practical use of transfer learning with `ResNet-152`, encoder-decoder modelling, NLP preprocessing, and critical evaluation of sequence-generation metrics.

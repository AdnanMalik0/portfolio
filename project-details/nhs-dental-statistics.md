# Analysis of NHS Dental Statistics

Source GitHub Repository: <https://github.com/AdnanMalik0/Analysis-of-NHS-Dental-Statistics>

## Snapshot

This project analyses NHS dental statistics in England for the 12-month period ending 31 March 2019. It is a strong public-data project because it combines multiple raw datasets into a single CCG-level analytical view before carrying out the downstream analysis.

## Goal

The aim was to study NHS dental activity in England, examine the relationship between deprivation and treated-patient numbers, and explore workforce risk through future dentist-shortage projection.

## Data Strategy

The final dataset was constructed from five raw sources:

- dentists workforce data
- patients data for Jul-Dec 2018
- patients data for Jan-Jun 2019
- CCG code-to-name mapping
- index of deprivation data

After cleaning and merging, the project produced a final dataset covering 191 CCGs.

## What Was Built

- A data-preparation workflow combining NHS, geography, and deprivation data
- A linked CCG-level dataset ready for analysis
- Notebook-based analysis and visualisation in Python
- A supporting written report in PDF form

## Evidence Included

- A dedicated data-preparation notebook for merging and cleaning the source data
- A separate analysis notebook for interpretation and visualisation
- A written report explaining the analytical findings
- A final processed dataset produced from multiple public raw sources

## Result / Outcome

The analysis found that the highest treated-patient volumes were in Age-Bands 8, 9, and 10, while very young children aged 0-2 represented a small share of treated patients. It also found a slight positive relationship between deprivation and treated-patient counts, and projected a decline in dentist numbers by 2031, with NHS Berkshire West showing the highest expected shortage.

## Portfolio Takeaway

This project is valuable because it demonstrates real public-sector data work: integration of multiple raw datasets, quality checks, geographic mapping, and policy-relevant interpretation rather than just isolated notebook analysis.

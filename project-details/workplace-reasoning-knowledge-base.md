# Workplace Reasoning Knowledge Base in Prolog

Source material: knowledge representation coursework report

## Snapshot

This project built a Prolog knowledge base to model workplace hierarchy, employee behaviour, and rule-based organisational consequences in a scenario centred on Aramco and IMALCO. It focuses on symbolic reasoning rather than statistical prediction.

## Goal

The objective was to represent workplace structure and behaviour as facts and rules, then derive consequences such as promotion, dismissal, branch transfer, and salary penalties through logical inference.

## What Was Built

- A fact base for companies, roles, reporting relationships, and named employees
- Behavioural facts for work completion, mistakes, preferences, and employee conditions
- Rule chains for organisational outcomes such as promotion, dismissal, transfer, and movement to another branch
- A compact Prolog reasoning setup reaching inference depth 7

## Knowledge Representation Scope

- Roles such as CEO, manager, developer, and accountant
- Workplace conditions such as sleeping at work, pending work, and management preference
- Rule chains connecting local facts to higher-level outcomes
- Cross-company reasoning using Aramco and IMALCO in the scenario design

## Result / Outcome

The knowledge base successfully inferred who could be promoted, dismissed, transferred, or moved, while achieving inference depth 7 with a relatively compact rule set. The evaluation also identified limitations such as incomplete domain coverage and the absence of dynamic fact updates after inferred role changes.

## Portfolio Takeaway

This project adds symbolic-AI breadth to the portfolio. It shows structured knowledge representation, interpretable logic inference, and rule-based reasoning beyond data-driven machine learning.

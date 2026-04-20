# IoT EV Fault Detection and Battery Monitoring

Source material: B.Tech capstone project report

## Snapshot

This capstone project developed an IoT-based electric-vehicle battery monitoring system for real-time fault detection, cloud telemetry, and alert-driven response. It combines embedded hardware, battery analytics, and remote monitoring in one end-to-end system.

## Goal

The objective was to detect electric-vehicle battery faults in real time, estimate battery health indicators such as `SOC` and `SOH`, transmit those signals to the cloud, and alert the driver when abnormal conditions are detected.

## What Was Built

- A hardware-based monitoring setup using `Arduino`, `NodeMCU`, and sensors
- Real-time acquisition of voltage, current, and temperature signals
- `SOC` estimation using an enhanced coulomb-counting approach
- `SOH` estimation using an ampere-hour vs voltage (`Ah-V`) linear-fit method
- Cloud monitoring through `ThingSpeak`
- Automated SMS alerting when low `SOC` or `SOH` thresholds were crossed

## Technical Approach

- Considered multiple `SOC` estimation approaches before choosing an implementation-friendly enhanced coulomb-counting method
- Built battery-health logic around depletion behaviour and slope comparison from `Ah-V` curves
- Used cloud-side processing for telemetry storage, visualisation, and trigger logic
- Tested the full system on a prototype EV-style setup using a lithium-ion battery and brushless DC motor

## Hardware and Platform Elements Mentioned

- `Arduino`
- `NodeMCU`
- `ThingSpeak`
- `IFTTT`
- `MAX6675`
- `ACS709` / `ACS712`
- `LM2596`
- MATLAB / Simulink

## Result / Outcome

The project demonstrated an autonomous fault-detection and battery-monitoring system that successfully transmitted battery data to the cloud, supported linear-fit-based battery-health analysis, and triggered driver notifications when unusual battery conditions were detected.

## Portfolio Takeaway

This project broadens the portfolio beyond analytics by showing embedded systems, telemetry, cloud monitoring, and engineering-focused fault detection in a practical real-world use case.

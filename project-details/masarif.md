# Masarif - Personal Expense Tracker

Source GitHub Repository: <https://github.com/AdnanMalik0/expenses-tracker-react>

Live app: <https://masarif.pages.dev>

## Snapshot

Masarif is a privacy-first personal finance dashboard built as an offline-capable React PWA. It is designed for users who want to import bank statements, analyse spending patterns, and explore transactions without creating an account or sending financial data to a backend service.

## Goal

The project aimed to make personal expense analysis fast, private, and usable on both desktop and mobile by keeping the full workflow inside the browser.

## What Was Built

- CSV and Excel import with drag-and-drop and file picker support
- Smart column auto-detection for date, amount, payer, and payee fields
- Multi-file merge and robust deduplication for overlapping statements
- KPI cards, daily flow line charts, income-vs-spend bars, and expense breakdown views
- A date-range slider and period binning across salary cycle, calendar month, quarter, and year
- A Transaction Explorer drawer with multi-pill filters, per-row exclusion, bulk exclude/include, pagination, and CSV export
- A Payee Lookup panel with payee-level stats and monthly trend views

## Main Features

- Fully client-side operation with no account or server required
- Local-only data handling so financial data stays in the browser
- Installable PWA behaviour with offline support after first load
- Responsive mobile layout with dedicated navigation and swipe-to-close drawers
- Cloudflare Pages deployment for lightweight public hosting

## Tech Stack

- React 19
- Vite 8
- Chart.js 4 with `react-chartjs-2`
- `xlsx` for file parsing
- `noUiSlider` for range controls
- `vite-plugin-pwa` / Workbox for offline support

## Evidence Included

- A working live application that can be opened and tested directly
- A production-style React codebase with reusable dashboard and data-exploration components
- Client-side parsing, deduplication, filtering, and export logic for financial data
- PWA support and deployment-ready frontend configuration

## Result / Outcome

The result is a fully client-side, installable expense tracker with no user data leaving the device. It demonstrates end-to-end frontend engineering across data parsing, interactive visualisation, responsive layout, and PWA deployment.

## Portfolio Takeaway

Masarif is one of the strongest application projects in the portfolio because it moves beyond analysis into a polished end-user product. It shows frontend product thinking, local-first data handling, and practical deployment.

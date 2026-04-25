# Task Tracker App

Source GitHub Repository: <https://github.com/AdnanMalik0/task-tracker-app>

## Snapshot

Task Tracker is a self-built personal productivity tool for planning and tracking daily work. It is a React SPA with calendar scheduling, structured task breakdowns, checklist-based step tracking, and a Cloudflare Workers backend with D1 database persistence for cross-device sync.

## Goal

The project aimed to build a practical planning tool tailored to personal workflow — one that tracks tasks, their ordered steps, and their schedule without relying on an existing productivity platform.

## What Was Built

- A month and year calendar view for scheduling tasks across dates
- A day view showing all tasks scheduled for a selected date
- A task detail view with ordered steps and per-step checklist tracking
- A `Task Now` flow for jumping directly to the current active work item
- JSON-based export and import for full data portability
- Local browser persistence so tasks survive page reloads without a backend round-trip
- A Cloudflare Workers backend with a D1 database for cloud sync via `/api/state`
- Old-task cleanup tools for removing tasks older than 6 months, 1 year, or 2 years
- Responsive desktop and mobile layouts

## Tech Stack

- React
- Vite
- React Router
- CSS modules
- Cloudflare Workers (backend API)
- Cloudflare D1 (SQLite-based database)
- Wrangler (deployment tooling)

## Architecture

The frontend is a React SPA with context-based state management. The backend is a single Cloudflare Worker function that stores a JSON snapshot of the planner state in a D1 table. This minimal backend model is intentional — the app is single-user, so a snapshot-based sync approach is the right size for the problem without over-engineering.

## Evidence Included

- A working React frontend codebase with multi-screen navigation and context-driven state
- A Cloudflare Workers backend with D1 persistence for cross-device state sync
- JSON export and import for data portability independent of the backend
- A Wrangler-based deployment setup for Cloudflare Pages

## Result / Outcome

The result is a fully functional personal planner with calendar views, structured task tracking, and a cloud sync path. It demonstrates product thinking applied to personal tooling — scoping what is actually needed, choosing an appropriately minimal architecture, and shipping a working tool from scratch.

## Portfolio Takeaway

This project shows full-stack frontend engineering beyond data analysis: designing a real-use application, managing state across multiple screens, building a lightweight backend on Cloudflare infrastructure, and delivering a practical tool for daily use.

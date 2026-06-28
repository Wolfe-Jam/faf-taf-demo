# faf-taf-demo

[![CI + TAF Receipt](https://github.com/Wolfe-Jam/faf-taf-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/Wolfe-Jam/faf-taf-demo/actions/workflows/ci.yml)
[![Live .taf timeline](https://img.shields.io/badge/.taf-live%20timeline-00D4D4)](https://github.com/Wolfe-Jam/faf-taf-demo/blob/taf-receipts/.taf)

Demo: **Git-Native Receipt Printer** in action.

## Try It Now

1. **[Run Workflow](https://github.com/Wolfe-Jam/faf-taf-demo/actions/workflows/ci.yml)** → Click "Run workflow" button
2. **[Watch the timeline grow](https://github.com/Wolfe-Jam/faf-taf-demo/blob/taf-receipts/.taf)** → a new receipt appends every run

Or fork this repo and push a commit - the receipt prints automatically.

> The receipts live on the **[`taf-receipts`](https://github.com/Wolfe-Jam/faf-taf-demo/tree/taf-receipts)** branch — append-only, one more every CI run. `main` stays your code; the **timeline is the proof**. Full format: **[RECEIPT-FORMAT.md](https://github.com/Wolfe-Jam/faf-taf-git/blob/main/RECEIPT-FORMAT.md)**.

## What is .taf?

`.taf` (Test Receipts) is the "Receipt" in the CAR Framework:

| Component | File | Purpose |
|-----------|------|---------|
| **C**laim | `.faf` | What you say your project does |
| **A**udit | tests | Prove it works |
| **R**eceipt | `.taf` | Git-tracked test history |

**No CAR = No transport.** 🏎️

## How It Works

1. Push code (or click "Run workflow")
2. CI runs tests
3. [faf-taf-git](https://github.com/marketplace/actions/faf-taf-action) auto-updates `.taf`
4. Test history is version controlled forever

## Links

- [faf-taf-git on GitHub Marketplace](https://github.com/marketplace/actions/faf-taf-action)
- [FAF Format (IANA Registered)](https://www.iana.org/assignments/media-types/application/vnd.faf+yaml)
- [faf.one](https://faf.one)

---

MIT License

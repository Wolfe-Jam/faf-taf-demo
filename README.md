# faf-taf-demo

Demo: **Git-Native Receipt Printer** in action.

## What is .taf?

`.taf` (Testing Activity Feed) is the "Receipt" in the CAR Framework:

| Component | File | Purpose |
|-----------|------|---------|
| **C**laim | `.faf` | What you say your project does |
| **A**udit | tests | Prove it works |
| **R**eceipt | `.taf` | Git-tracked test history |

**No CAR = No transport.**

## How It Works

1. Push code to `main`
2. CI runs tests
3. [faf-taf-git](https://github.com/marketplace/actions/faf-taf-action) auto-updates `.taf`
4. Test history is version controlled forever

## Quick Start

```bash
npm install
npm test
```

## See It In Action

Check the [.taf](./.taf) file - it updates automatically on every CI run.

## Links

- [faf-taf-git on GitHub Marketplace](https://github.com/marketplace/actions/faf-taf-action)
- [FAF Format (IANA Registered)](https://www.iana.org/assignments/media-types/application/vnd.faf+yaml)

---

MIT License

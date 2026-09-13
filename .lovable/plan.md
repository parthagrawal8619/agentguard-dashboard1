# AgentPayGuard production frontend

## Goal
Build a polished, responsive Web3 payment-control experience around the promise **“AI decides. The blockchain enforces.”** All screens use consistent mock data: 10 USDC budget, 9 spent, 1 remaining, three successful purchases, and one blocked 4 USDC compute attempt.

## Product structure
- Create a public landing page at `/` with AGENT-01, product positioning, two calls to action, and an animated 10 → 9 → blocked payment visualization.
- Create a shared authenticated-style app shell for `/dashboard`, `/agent`, `/services`, `/payments`, `/audit`, `/security`, `/demo`, and `/settings`.
- Use a collapsible icon sidebar on desktop, compact top bar, and mobile bottom navigation with an overflow sheet.
- Give every page unique metadata and working navigation.

## Visual system
- Build a deliberate dark/light token system: deep near-black navy in dark mode and crisp cool white in light mode, with electric cyan and cyber-purple accents.
- Add restrained glass surfaces, HUD lines, scanline/grid texture, luminous status rings, and sharp compact dashboard spacing without sacrificing readability.
- Load a geometric display face plus JetBrains Mono for hashes, addresses, and terminal output.
- Generate an original AGENT-01 anime/cyberpunk mascot asset and reuse it consistently in the landing page, profile, status, empty, and blocked states.
- Add a prominent persistent theme toggle and reduced-motion fallbacks.

## Shared frontend foundation
- Add typed mock models and data for agents, services, payments, security checks, budget, and audit events.
- Build reusable shell, page header, status badge, metric, budget ring, mascot portrait, copy control, hash display, and transaction-detail drawer components.
- Use Lucide icons, existing interface primitives, Recharts, and Motion for purposeful transitions and state animations.

## Screens and interactions
- **Dashboard:** agent status, 90% budget ring, live activity, payment flow visualizer, security status, recent purchase drawer, and spending/distribution/outcome charts.
- **Agent:** AGENT-01 identity, capabilities, live core state, and animated reasoning terminal.
- **Services:** translation, compute, storage, and AI inference provider catalog with price, quality, availability, address, and purchase history.
- **Payments:** searchable/filterable status table with transaction modal, hashes, copy controls, and Base Sepolia links.
- **Audit:** forensic chronological console covering request, quote, budget check, settlement, delivery, and cryptographic verification.
- **Security:** weak-AI versus bytecode-enforced comparison, hard-cap equation, replay-protection demo, and one-click SHA-256 delivery verification for “Hello World → नमस्ते दुनिया”.
- **Demo:** user-triggered overspend simulation with staged cinematic progression, shield activation, blocked impact state, zero-transfer result, and reset.
- **Settings:** functional theme controls, mock wallet status, security thresholds, and agent parameters.

## Validation
- Verify route navigation, filters, drawers/modals, copy actions, theme persistence, simulations, hashes, and charts.
- Check desktop and mobile layouts in the browser, including overflow, text fit, contrast, and reduced-motion behavior.
- Run focused tests and ensure the app has no console errors or broken links.

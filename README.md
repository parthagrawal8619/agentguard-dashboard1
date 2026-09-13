# AgentGuard Dashboard

Create a production-quality frontend UI for "AgentPayGuard" — "AI decides. The blockchain enforces." — a Web3 + AI agent autonomous payment control center where an AI agent purchases services using x402-style machine payments while a smart contract enforces an unbypassable budget limit.

Key Design & Aesthetic Requirements:
1. Visual Identity:
   - Futuristic anime-inspired cyberpunk command center meets sleek Stripe/Linear Web3 dashboard.
   - Original cyberpunk anime AI mascot "AGENT-01" (cyan holographic eyes, glowing AI core, futuristic tech-jacket, minimal robotic detailing) used in agent cards, landing hero, empty states, and overspend alerts.
   - Electric cyan (#00F0FF / #06b6d4) and cyber purple (#8B5CF6 / #a855f7) accents, neon status rings, subtle scanlines/HUD grids, glassmorphism cards.
2. Complete Dark and Light Theme System:
   - Prominent theme toggle in top navigation.
   - Dark Mode: #070A12 deep background, dark navy glass cards, electric cyan/purple neon highlights, bright typography.
   - Light Mode: #F6F8FC background, crisp white glass cards, deep navy text, crisp borders, electric blue/purple accents. Intentionally designed, not just inverted. Persists preference.
3. Architecture & Pages (accessible via modern Desktop Sidebar & Mobile Bottom/collapsible navigation):
   - Landing Page: Hero with tagline, "Launch Dashboard" and "Run Security Demo" CTAs, interactive animated visual showing budget (10 USDC limit, 9 spent, 1 remaining, 4 USDC attempt -> BLOCKED with smart contract node).
   - Dashboard (Main):
     - Agent status card (AGENT-01 online, active core, pulse indicator).
     - Budget overview card (9/10 USDC, 90% circular progress ring, "Hard cap enforced on-chain").
     - Live payment activity stream (real-time style with animated blocked alert).
     - Interactive Payment Flow Visualizer (AI Agent -> Provider -> HTTP 402 -> x402 Payment -> Budget Contract -> Service Delivery -> Audit Log).
     - Security status panel (Hard cap, on-chain enforcement, replay protection, delivery verification).
     - Recent purchases table (clickable rows opening slide-over detail drawer).
     - Analytics charts (Spending over time, service distribution, success vs blocked ratio using Recharts).
   - Agent Page: AGENT-01 profile, capabilities list, animated AI Thinking Terminal/HUD showing real-time autonomous reasoning steps (requesting resource -> receiving 402 -> verifying budget -> settling payment).
   - Services Page: Catalog of provider cards (Translation, Compute, Storage, AI Inference) with pricing, quality ratings, availability, provider addresses, and purchase history.
   - Payments Page: Full searchable & filterable table (Success, Blocked, Failed, Duplicate) with detailed transaction modal (Request Hash, Response Hash, Content Hash, Base Sepolia TX link, copy buttons).
   - Audit Trail: Forensic security timeline console tracking each step of autonomous payments down to cryptographic verification.
   - Security / Budget Page: Deep visual explanation contrasting "Weak AI approach (AI promises not to overspend)" vs "AgentPayGuard on-chain enforcement (9 + 4 > 10 = Blocked by bytecode)".
   - Demo Mode ("Overspend Attack Simulation"):
     - Live interactive simulation where user clicks "TRIGGER OVERSPEND ATTACK".
     - Step-by-step cinematic animation: Agent requests 4 USDC compute -> HTTP 402 received -> Contract checks 9 + 4 > 10 -> Contract shield activates -> Dramatic manga-style "PAYMENT BLOCKED: BUDGET_EXCEEDED" impact -> 0 USDC transferred -> Reset button.
   - Interactive Replay Protection UI & Delivery Verification UI:
     - Demonstration of idempotency/duplicate payment prevention.
     - One-click hash verification demonstration ("Hello World → नमस्ते दुनिया" with cryptographic SHA-256 content verification).
   - Settings Page: Theme settings, connected Base Sepolia wallet status, security thresholds, agent parameters.
4. UI/UX Details:
   - Use Lucide icons, Framer Motion animations (respecting reduced motion), Tailwind CSS, shadcn/ui components, JetBrains Mono/monospace fonts for hashes and addresses.
   - Mock data initialized with the required numbers: 10 USDC total budget, 9 USDC spent, 1 USDC remaining, previous purchases (Translation 2 USDC, Compute 4 USDC, Storage 3 USDC), and blocked 4 USDC compute attempt.
   - Fast, responsive, clean TypeScript modular components.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://agentguard-dashboard.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f01f991f-a2d8-4b01-9c5a-56e338093faf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

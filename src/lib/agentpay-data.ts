export type PaymentStatus = "Success" | "Blocked" | "Failed" | "Duplicate";

export interface Payment {
  id: string;
  service: string;
  provider: string;
  amount: number;
  status: PaymentStatus;
  time: string;
  requestHash: string;
  responseHash: string;
  contentHash: string;
  tx?: string;
}

export const budget = { total: 10, spent: 9, remaining: 1 };

export const payments: Payment[] = [
  { id: "PAY-7A21", service: "Translation", provider: "LinguaMesh", amount: 2, status: "Success", time: "2 min ago", requestHash: "0x8c1f4b79a0d6e2c17d54f86e31ba5ec0", responseHash: "0xd911a73f008ce59947ea19b04c712ae5", contentHash: "0x93d7c32f7ca4f18e922f6a56ed51e8e7", tx: "0x762f0b6f3ad88aaea20bdf1b8b31fd41" },
  { id: "PAY-3F04", service: "Compute", provider: "TensorForge", amount: 4, status: "Success", time: "18 min ago", requestHash: "0x44b2149892cd532fe522d4d414f1e373", responseHash: "0x18f80730cf2a93ea43fd996de9a3ac4b", contentHash: "0x0d77897337d005968cee919ce39f9c72", tx: "0xc1e503fa7d09c2a71f9c87a48a227071" },
  { id: "PAY-1D89", service: "Storage", provider: "ArcaVault", amount: 3, status: "Success", time: "41 min ago", requestHash: "0x91de71e7eaa33d9f663d54ecab28a1f2", responseHash: "0x11b3ae569224ea09ef58bc7711ae3c4f", contentHash: "0xae148e63645c7fae66c0153cb5e17c0c", tx: "0x5e91b6d093a95dcc2cc2e6dd6aeb9090" },
  { id: "PAY-9C10", service: "Compute", provider: "TensorForge", amount: 4, status: "Blocked", time: "Just now", requestHash: "0x4bf122f65ae975980fdcc1e894e792d8", responseHash: "0x00000000000000000000000000000000", contentHash: "0x00000000000000000000000000000000" },
  { id: "PAY-8B14", service: "AI Inference", provider: "NeuralPort", amount: 1.2, status: "Failed", time: "Yesterday", requestHash: "0xac86fa89d03d24c699b2b04998aab900", responseHash: "0x00000000000000000000000000000000", contentHash: "0x00000000000000000000000000000000" },
  { id: "PAY-2E71", service: "Translation", provider: "LinguaMesh", amount: 2, status: "Duplicate", time: "Yesterday", requestHash: "0x8c1f4b79a0d6e2c17d54f86e31ba5ec0", responseHash: "0xd911a73f008ce59947ea19b04c712ae5", contentHash: "0x93d7c32f7ca4f18e922f6a56ed51e8e7" },
];

export const services = [
  { name: "Translation", provider: "LinguaMesh", price: "2.00 USDC / request", rating: 4.9, uptime: "99.99%", address: "0x71A4...9F2C", icon: "languages", history: 14 },
  { name: "Compute", provider: "TensorForge", price: "4.00 USDC / job", rating: 4.8, uptime: "99.97%", address: "0x5C02...A811", icon: "cpu", history: 8 },
  { name: "Storage", provider: "ArcaVault", price: "3.00 USDC / GB", rating: 4.7, uptime: "99.95%", address: "0xE2B9...10D4", icon: "database", history: 6 },
  { name: "AI Inference", provider: "NeuralPort", price: "1.20 USDC / 1K", rating: 4.9, uptime: "99.98%", address: "0x923F...7BA0", icon: "brain", history: 21 },
];

export const spendData = [
  { time: "08:00", spend: 0 }, { time: "09:00", spend: 2 }, { time: "10:00", spend: 2 },
  { time: "11:00", spend: 6 }, { time: "12:00", spend: 6 }, { time: "13:00", spend: 9 },
];

export const auditEvents = [
  ["14:32:08.042", "REQUEST", "Agent requested TensorForge compute allocation", "verified"],
  ["14:32:08.119", "HTTP 402", "Provider returned signed payment requirements: 4 USDC", "verified"],
  ["14:32:08.204", "NONCE", "Nonce 0x91e7 checked against replay registry", "verified"],
  ["14:32:08.271", "BUDGET", "Contract evaluated spent(9) + request(4) > cap(10)", "blocked"],
  ["14:32:08.273", "REVERT", "BUDGET_EXCEEDED — transaction halted before transfer", "blocked"],
  ["14:32:08.288", "AUDIT", "Proof bundle anchored to Base Sepolia", "verified"],
];
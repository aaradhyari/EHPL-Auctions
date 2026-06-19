export const TOTAL_PURSE = 1500000;

export const DEFAULT_TEAMS = [
  { id: 1, name: "Team Alpha", purse: TOTAL_PURSE },
  { id: 2, name: "Team Bravo", purse: TOTAL_PURSE },
  { id: 3, name: "Team Charlie", purse: TOTAL_PURSE },
  { id: 4, name: "Team Delta", purse: TOTAL_PURSE },
  { id: 5, name: "Team Echo", purse: TOTAL_PURSE },
  { id: 6, name: "Team Foxtrot", purse: TOTAL_PURSE },
  { id: 7, name: "Team Golf", purse: TOTAL_PURSE },
  { id: 8, name: "Team Hotel", purse: TOTAL_PURSE },
  { id: 9, name: "Team India", purse: TOTAL_PURSE },
  { id: 10, name: "Team Juliet", purse: TOTAL_PURSE },
  { id: 11, name: "Team Kilo", purse: TOTAL_PURSE },
  { id: 12, name: "Team Lima", purse: TOTAL_PURSE },
];

export const TEAM_COLORS = [
  { bg: "from-blue-600/20 to-blue-900/10", accent: "#3b82f6", border: "border-blue-500/30" },
  { bg: "from-red-600/20 to-red-900/10", accent: "#ef4444", border: "border-red-500/30" },
  { bg: "from-yellow-500/20 to-yellow-900/10", accent: "#eab308", border: "border-yellow-500/30" },
  { bg: "from-purple-600/20 to-purple-900/10", accent: "#a855f7", border: "border-purple-500/30" },
  { bg: "from-cyan-500/20 to-cyan-900/10", accent: "#06b6d4", border: "border-cyan-500/30" },
  { bg: "from-orange-500/20 to-orange-900/10", accent: "#f97316", border: "border-orange-500/30" },
  { bg: "from-green-600/20 to-green-900/10", accent: "#22c55e", border: "border-green-500/30" },
  { bg: "from-pink-500/20 to-pink-900/10", accent: "#ec4899", border: "border-pink-500/30" },
  { bg: "from-teal-500/20 to-teal-900/10", accent: "#14b8a6", border: "border-teal-500/30" },
  { bg: "from-indigo-500/20 to-indigo-900/10", accent: "#6366f1", border: "border-indigo-500/30" },
  { bg: "from-rose-500/20 to-rose-900/10", accent: "#f43f5e", border: "border-rose-500/30" },
  { bg: "from-emerald-500/20 to-emerald-900/10", accent: "#10b981", border: "border-emerald-500/30" },
];

export const STORAGE_KEY = "ehpl-auction-teams";

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatCompactCurrency(amount) {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)}L`;
  } else if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(1)}K`;
  }
  return `₹${amount.toLocaleString("en-IN")}`;
}

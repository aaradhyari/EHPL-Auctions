"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  TOTAL_PURSE,
  DEFAULT_TEAMS,
  TEAM_COLORS,
  STORAGE_KEY,
  formatCurrency,
  formatCompactCurrency,
} from "./lib/teams";

function TeamCard({ team, index, isUpdated }) {
  const color = TEAM_COLORS[index % TEAM_COLORS.length];
  const percentage = Math.max(0, (team.purse / TOTAL_PURSE) * 100);
  const spent = TOTAL_PURSE - team.purse;

  return (
    <div
      className={`card-glow relative overflow-hidden rounded-2xl border ${color.border} bg-gradient-to-br ${color.bg} backdrop-blur-sm p-3 sm:p-4 lg:p-5 flex flex-col justify-between transition-all duration-500 animate-slide-in`}
      style={{
        animationDelay: `${index * 60}ms`,
        background: `linear-gradient(135deg, ${color.accent}10 0%, #12121a 60%, ${color.accent}05 100%)`,
        borderColor: `${color.accent}30`,
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${color.accent}, transparent)` }}
      />

      {/* Team Name */}
      <div className="flex items-center justify-between mb-2 lg:mb-3">
        <h2 className="text-sm sm:text-base lg:text-xl font-bold tracking-wide truncate pr-2" style={{ color: color.accent }}>
          {team.name}
        </h2>
        <div
          className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 rounded-full text-[10px] sm:text-xs lg:text-sm font-bold shrink-0 ${isUpdated ? "animate-count-update" : ""}`}
          style={{
            background: `${color.accent}20`,
            color: color.accent,
            border: `1px solid ${color.accent}40`,
          }}
        >
          {Math.round(percentage)}%
        </div>
      </div>

      {/* Purse Amount */}
      <div className="mb-2 lg:mb-3">
        <p
          className={`text-lg sm:text-xl lg:text-3xl font-extrabold tracking-tight leading-none ${isUpdated ? "animate-count-update" : ""}`}
          style={{ color: "#f0e6d3" }}
        >
          {formatCompactCurrency(team.purse)}
        </p>
        <p className="text-[10px] sm:text-xs text-muted mt-0.5">
          of {formatCompactCurrency(TOTAL_PURSE)}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full">
        <div className="w-full h-2 sm:h-2.5 lg:h-3 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out progress-shimmer"
            style={{
              width: `${percentage}%`,
              background: `linear-gradient(90deg, ${color.accent}80, ${color.accent}, ${color.accent}80)`,
              backgroundSize: "200% 100%",
            }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] sm:text-[10px] text-muted">
            Spent: {formatCompactCurrency(spent)}
          </span>
          <span className="text-[9px] sm:text-[10px] font-medium" style={{ color: color.accent }}>
            {percentage.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function DisplayPage() {
  const [teams, setTeams] = useState(DEFAULT_TEAMS);
  const [updatedIds, setUpdatedIds] = useState(new Set());
  const prevTeamsRef = useRef(null);

  const loadTeams = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setTeams((prev) => {
          // Detect which teams changed
          const newUpdated = new Set();
          prev.forEach((t) => {
            const updated = parsed.find((p) => p.id === t.id);
            if (updated && updated.purse !== t.purse) {
              newUpdated.add(t.id);
            }
          });
          if (newUpdated.size > 0) {
            setUpdatedIds(newUpdated);
            setTimeout(() => setUpdatedIds(new Set()), 400);
          }
          return parsed;
        });
      }
    } catch (e) {
      console.error("Failed to load teams:", e);
    }
  }, []);

  useEffect(() => {
    // Initial load
    loadTeams();

    // Listen for storage changes from admin page
    const handleStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        loadTeams();
      }
    };

    window.addEventListener("storage", handleStorage);

    // Also poll for same-tab changes (localStorage events don't fire in same tab)
    const interval = setInterval(loadTeams, 500);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, [loadTeams]);

  // Calculate totals
  const totalRemaining = teams.reduce((sum, t) => sum + t.purse, 0);
  const totalBudget = TOTAL_PURSE * 12;
  const totalSpent = totalBudget - totalRemaining;

  return (
    <div className="h-screen w-screen overflow-hidden bg-background flex flex-col">
      {/* Header */}
      <header className="shrink-0 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 border-b border-card-border/50">
        <div className="flex items-center justify-between max-w-[1920px] mx-auto">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent-green animate-pulse" />
              <span className="text-[10px] sm:text-xs text-accent-green font-medium uppercase tracking-widest">
                Live
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tight text-gradient-gold glow-gold">
              EHPL AUCTION
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] sm:text-xs text-muted uppercase tracking-wider">Total Budget</p>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-foreground">
                {formatCurrency(totalBudget)}
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-[10px] sm:text-xs text-muted uppercase tracking-wider">Total Spent</p>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-accent-red">
                {formatCurrency(totalSpent)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] sm:text-xs text-muted uppercase tracking-wider">Remaining</p>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-gradient-gold">
                {formatCurrency(totalRemaining)}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Team Grid */}
      <main className="flex-1 min-h-0 px-3 sm:px-5 lg:px-8 py-3 sm:py-4 lg:py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 h-full max-w-[1920px] mx-auto auto-rows-fr">
          {teams.map((team, index) => (
            <TeamCard
              key={team.id}
              team={team}
              index={index}
              isUpdated={updatedIds.has(team.id)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="shrink-0 px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 border-t border-card-border/30">
        <div className="flex items-center justify-between max-w-[1920px] mx-auto">
          <p className="text-[10px] sm:text-xs text-muted">
            EHPL Auction Dashboard • {teams.length} Teams
          </p>
          <p className="text-[10px] sm:text-xs text-muted">
            Purse per team: {formatCurrency(TOTAL_PURSE)}
          </p>
        </div>
      </footer>
    </div>
  );
}

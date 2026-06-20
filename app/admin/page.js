"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  TOTAL_PURSE,
  DEFAULT_TEAMS,
  TEAM_COLORS,
  STORAGE_KEY,
  formatCurrency,
  formatCompactCurrency,
} from "../lib/teams";

function AdminTeamCard({ team, index, onUpdate, onReset }) {
  const color = TEAM_COLORS[index % TEAM_COLORS.length];
  const percentage = (team.purse / TOTAL_PURSE) * 100;
  const [manualInput, setManualInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleAdjust = (amount) => {
    const newPurse = team.purse + amount;
    onUpdate(team.id, newPurse);
  };

  const handleManualSet = () => {
    const value = parseInt(manualInput, 10);
    if (!isNaN(value)) {
      onUpdate(team.id, value);
      setManualInput("");
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleManualSet();
    if (e.key === "Escape") {
      setManualInput("");
      setIsEditing(false);
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-card-border bg-card-bg p-4 sm:p-5 transition-all duration-300 hover:border-opacity-60 animate-fade-in-up"
      style={{
        animationDelay: `${index * 50}ms`,
        borderColor: `${color.accent}25`,
      }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${color.accent}, transparent)` }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-base sm:text-lg font-bold" style={{ color: color.accent }}>
            {team.name}
          </h3>
          <p className="text-xs text-muted mt-0.5">
            ID: #{team.id}
          </p>
        </div>
        <button
          onClick={() => onReset(team.id)}
          className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-lg bg-accent-red/10 text-accent-red border border-accent-red/20 hover:bg-accent-red/20 transition-all duration-200 cursor-pointer"
          title="Reset to full purse"
        >
          Reset
        </button>
      </div>

      {/* Current Purse Display */}
      <div className="mb-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
        <div className="flex items-baseline justify-between">
          <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${team.purse < 0 ? 'text-accent-red' : 'text-foreground'}`}>
            {formatCompactCurrency(team.purse)}
          </span>
          <span
            className="text-sm sm:text-base font-bold px-2 py-0.5 rounded-md"
            style={{
              color: color.accent,
              background: `${color.accent}15`,
            }}
          >
            {percentage.toFixed(1)}%
          </span>
        </div>
        <p className="text-[10px] sm:text-xs text-muted mt-1">
          {formatCurrency(team.purse)} / {formatCurrency(TOTAL_PURSE)}
        </p>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden mt-2">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${Math.max(0, percentage)}%`,
              background: percentage < 0
                ? 'linear-gradient(90deg, #ef444490, #ef4444)'
                : `linear-gradient(90deg, ${color.accent}90, ${color.accent})`,
            }}
          />
        </div>
      </div>

      {/* Quick Adjust Buttons */}
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-3">
        <button
          onClick={() => handleAdjust(-10000)}
          className="flex items-center justify-center gap-1 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-accent-red/10 text-accent-red border border-accent-red/20 hover:bg-accent-red/25 active:scale-95 transition-all duration-150 cursor-pointer"
        >
          <span>−</span>10K
        </button>
        <button
          onClick={() => handleAdjust(-50000)}
          className="flex items-center justify-center gap-1 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-accent-red/15 text-accent-red border border-accent-red/25 hover:bg-accent-red/30 active:scale-95 transition-all duration-150 cursor-pointer"
        >
          <span>−</span>50K
        </button>
        <button
          onClick={() => handleAdjust(10000)}
          className="flex items-center justify-center gap-1 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-accent-green/10 text-accent-green border border-accent-green/20 hover:bg-accent-green/25 active:scale-95 transition-all duration-150 cursor-pointer"
        >
          <span>+</span>10K
        </button>
        <button
          onClick={() => handleAdjust(50000)}
          className="flex items-center justify-center gap-1 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-accent-green/15 text-accent-green border border-accent-green/25 hover:bg-accent-green/30 active:scale-95 transition-all duration-150 cursor-pointer"
        >
          <span>+</span>50K
        </button>
      </div>

      {/* Manual Input */}
      <div className="flex gap-2">
        <input
          type="number"
          value={manualInput}
          onChange={(e) => setManualInput(e.target.value)}
          onFocus={() => setIsEditing(true)}
          onKeyDown={handleKeyDown}
          placeholder="Set amount..."
          className="flex-1 px-3 py-2 text-xs sm:text-sm rounded-lg bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-200"
        />
        <button
          onClick={handleManualSet}
          disabled={!manualInput}
          className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gold/15 text-gold border border-gold/25 hover:bg-gold/25 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all duration-150 cursor-pointer"
        >
          Set
        </button>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [teams, setTeams] = useState(DEFAULT_TEAMS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setTeams(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load teams:", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever teams change
  const saveTeams = useCallback((newTeams) => {
    setTeams(newTeams);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newTeams));
    } catch (e) {
      console.error("Failed to save teams:", e);
    }
  }, []);

  const handleUpdate = useCallback(
    (id, newPurse) => {
      saveTeams(
        teams.map((t) => (t.id === id ? { ...t, purse: newPurse } : t))
      );
    },
    [teams, saveTeams]
  );

  const handleReset = useCallback(
    (id) => {
      saveTeams(
        teams.map((t) => (t.id === id ? { ...t, purse: TOTAL_PURSE } : t))
      );
    },
    [teams, saveTeams]
  );

  const handleResetAll = useCallback(() => {
    if (window.confirm("Are you sure you want to reset ALL teams to full purse?")) {
      saveTeams(DEFAULT_TEAMS);
    }
  }, [saveTeams]);

  // Summary stats
  const totalRemaining = teams.reduce((sum, t) => sum + t.purse, 0);
  const totalBudget = TOTAL_PURSE * 12;
  const totalSpent = totalBudget - totalRemaining;

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-admin-bg flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-admin-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-admin-bg/80 border-b border-card-border/50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/"
                className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] transition-all duration-200"
                title="Back to Display"
              >
                <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-lg sm:text-2xl font-black tracking-tight text-gradient-gold">
                  ADMIN PANEL
                </h1>
                <p className="text-[10px] sm:text-xs text-muted">
                  Manage team purses • Changes sync in real-time
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Summary Stats */}
              <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <div className="text-right">
                  <p className="text-[10px] text-muted uppercase tracking-wider">Spent</p>
                  <p className="font-bold text-accent-red">{formatCompactCurrency(totalSpent)}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-muted uppercase tracking-wider">Remaining</p>
                  <p className="font-bold text-gradient-gold">{formatCompactCurrency(totalRemaining)}</p>
                </div>
              </div>

              <button
                onClick={handleResetAll}
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg bg-accent-red/10 text-accent-red border border-accent-red/25 hover:bg-accent-red/20 active:scale-95 transition-all duration-150 cursor-pointer"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Team Grid */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {teams.map((team, index) => (
            <AdminTeamCard
              key={team.id}
              team={team}
              index={index}
              onUpdate={handleUpdate}
              onReset={handleReset}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border/30 py-4">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-xs text-muted">
            EHPL Admin Panel • {teams.length} Teams
          </p>
          <Link
            href="/"
            className="text-xs text-gold hover:text-gold-light transition-colors duration-200"
          >
            View Display →
          </Link>
        </div>
      </footer>
    </div>
  );
}

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
import { CURRENT_PLAYER_KEY, GRADES, getPlayerImagePath } from "./lib/players";

function TeamCard({ team, index, isUpdated }) {
  const color = TEAM_COLORS[index % TEAM_COLORS.length];
  const percentage = (team.purse / TOTAL_PURSE) * 100;
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
          style={{ color: team.purse < 0 ? "#ef4444" : "#f0e6d3" }}
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
              width: `${Math.max(0, percentage)}%`,
              backgroundImage: percentage < 0
                ? 'linear-gradient(90deg, #ef444480, #ef4444, #ef444480)'
                : `linear-gradient(90deg, ${color.accent}80, ${color.accent}, ${color.accent}80)`,
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

function PlayerCard({ player }) {
  const [imgError, setImgError] = useState(false);

  if (!player) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center border border-white/10 rounded-2xl bg-card-bg/40 backdrop-blur-sm p-6 text-center relative overflow-hidden h-full min-h-[400px]">
        {/* Animated grid lines behind */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
        <div className="absolute w-[250px] h-[250px] bg-gold/5 rounded-full blur-3xl" />
        
        {/* Sleek icon / badge */}
        <div className="relative mb-6 w-20 h-20 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center animate-pulse">
          <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        
        <h3 className="text-xl font-bold text-gradient-gold uppercase tracking-wider mb-2">
          Waiting for Auction
        </h3>
        <p className="text-xs text-muted max-w-[220px]">
          No player has been put up for auction yet. Select one from the Admin Panel to begin.
        </p>
      </div>
    );
  }

  const grade = GRADES[player.grade] || GRADES.A;
  const imagePath = getPlayerImagePath(player);
  
  const statusColors = {
    available: "bg-accent-green/10 text-accent-green border-accent-green/30",
    "in-auction": "bg-gold/10 text-gold border-gold/30 animate-pulse",
    sold: "bg-accent-red/10 text-accent-red border-accent-red/30",
    unsold: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  };

  return (
    <div 
      className={`flex-1 flex flex-col justify-between rounded-2xl border bg-gradient-to-b from-[#12121a] to-[#0a0a0f] backdrop-blur-sm p-4 sm:p-6 lg:p-8 transition-all duration-500 overflow-hidden relative ${
        player.status === "in-auction" ? "player-panel-glow-active" : "player-panel-glow"
      }`}
      style={{
        borderColor: `${grade.color}40`,
      }}
    >
      {/* Announcement Overlay */}
      {(player.status === "sold" || player.status === "unsold") && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in">
          {/* Animated pulsing light background */}
          <div className={`absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-40 animate-pulse ${
            player.status === "sold" ? "bg-accent-green" : "bg-accent-red"
          }`} />

          <div className="text-center z-10 p-6 flex flex-col items-center justify-center animate-scale-up-bounce">
            {/* Status Icon */}
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 ${
              player.status === "sold" 
                ? "bg-accent-green/10 text-accent-green border-accent-green/30" 
                : "bg-accent-red/10 text-accent-red border-accent-red/30"
            }`}>
              {player.status === "sold" ? (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>

            {/* Announcement Text */}
            <h2 className={`text-5xl sm:text-6xl font-black uppercase tracking-widest leading-none mb-4 ${
              player.status === "sold" ? "text-accent-green glow-green" : "text-accent-red glow-red"
            }`}>
              {player.status === "sold" ? "SOLD" : "UNSOLD"}
            </h2>

            <div className="w-20 h-1 bg-white/20 my-4 rounded-full" />

            <p className="text-[10px] sm:text-xs text-muted uppercase tracking-widest mb-1">
              Player Name
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground truncate max-w-[320px]">
              {player.name}
            </h3>

            <p className="text-xs font-bold text-gold uppercase mt-3 px-3 py-1 rounded-full bg-gold/10 border border-gold/25">
              Grade {player.grade}
            </p>
          </div>
        </div>
      )}
      {/* Top golden light line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, transparent, ${grade.color}, transparent)` }}
      />
      
      {/* Header Info */}
      <div className="flex items-center justify-between mb-4">
        <span 
          className="text-xs sm:text-sm font-bold px-3 py-1 rounded-full border tracking-wide uppercase"
          style={{
            color: grade.color,
            borderColor: grade.border,
            background: `${grade.color}15`,
            textShadow: `0 0 10px ${grade.color}40`,
          }}
        >
          {grade.label}
        </span>
        <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-md border uppercase tracking-wider ${statusColors[player.status] || ''}`}>
          {player.status === "in-auction" ? "Live Auction" : player.status}
        </span>
      </div>

      {/* Main Display: PNG Card or Fallback */}
      <div className="flex-1 flex flex-col items-center justify-center my-2 min-h-[320px] relative">
        {!imgError && imagePath ? (
          <div className="relative w-full h-full min-h-[320px] max-h-[580px] flex items-center justify-center transition-all duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={imagePath} 
              alt={player.name}
              onError={() => setImgError(true)}
              className="max-w-full max-h-full object-contain rounded-xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        ) : (
          /* Fallback UI: Beautiful virtual card */
          <div 
            className="w-full max-w-[380px] aspect-[3/4] rounded-xl border flex flex-col justify-between p-6 relative overflow-hidden transition-all duration-300"
            style={{
              borderColor: `${grade.color}30`,
              background: `radial-gradient(circle at 50% 30%, ${grade.color}15 0%, #12121a 70%)`,
            }}
          >
            {/* Hologram or card pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:15px_15px] opacity-40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/2 rounded-full blur-xl pointer-events-none" />
            
            {/* Card Grade Logo watermarked */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl font-extrabold select-none opacity-5 pointer-events-none"
              style={{ color: grade.color }}
            >
              {player.grade}
            </div>

            {/* Silhouette or placeholder shape */}
            <div className="flex-1 flex items-center justify-center relative min-h-0">
              <svg 
                className="w-36 h-36 opacity-10" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: grade.color }}
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>

            {/* Bottom player info on the card */}
            <div className="text-center mt-3 z-10">
              <div 
                className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                style={{ color: grade.color }}
              >
                {grade.label} Pool
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-foreground tracking-wide truncate">
                {player.name}
              </h4>
              <div className="w-12 h-0.5 mx-auto my-1.5 opacity-40" style={{ backgroundColor: grade.color }} />
              <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider block">
                EHPL Season
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-white/[0.04] text-center">
        <p className="text-[10px] sm:text-xs text-muted uppercase tracking-wider">Player Name</p>
        <p className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground tracking-wide truncate">
          {player.name}
        </p>
        {player.status === "in-auction" && (
          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-ping" />
            <span className="text-[10px] sm:text-xs text-accent-green font-bold uppercase tracking-widest">
              Bidding Active
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DisplayPage() {
  const [teams, setTeams] = useState(DEFAULT_TEAMS);
  const [updatedIds, setUpdatedIds] = useState(new Set());
  const [currentPlayer, setCurrentPlayer] = useState(null);
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

  const loadCurrentPlayer = useCallback(() => {
    try {
      const stored = localStorage.getItem(CURRENT_PLAYER_KEY);
      if (stored) {
        setCurrentPlayer(JSON.parse(stored));
      } else {
        setCurrentPlayer(null);
      }
    } catch (e) {
      console.error("Failed to load current player:", e);
    }
  }, []);

  useEffect(() => {
    // Initial load asynchronously to avoid synchronous setState lint warnings on mount
    const timer = setTimeout(() => {
      loadTeams();
      loadCurrentPlayer();
    }, 0);

    // Listen for storage changes from admin page
    const handleStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        loadTeams();
      }
      if (e.key === CURRENT_PLAYER_KEY) {
        loadCurrentPlayer();
      }
    };

    window.addEventListener("storage", handleStorage);

    // Also poll for same-tab changes (localStorage events don't fire in same tab)
    const interval = setInterval(() => {
      loadTeams();
      loadCurrentPlayer();
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, [loadTeams, loadCurrentPlayer]);

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

      {/* Main Layout: Left Team Grid + Right Player Panel */}
      <main className="flex-1 min-h-0 px-3 sm:px-5 lg:px-8 py-3 sm:py-4 lg:py-5 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-4 h-full max-w-[1920px] mx-auto">
          {/* Left: Teams Grid (55% width on desktop) */}
          <div className="flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar">
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 auto-rows-fr">
              {teams.map((team, index) => (
                <TeamCard
                  key={team.id}
                  team={team}
                  index={index}
                  isUpdated={updatedIds.has(team.id)}
                />
              ))}
            </div>
          </div>

          {/* Right: Player Panel (45% width on desktop) */}
          <div className="w-full lg:w-[45%] shrink-0 h-auto lg:h-full flex flex-col">
            <PlayerCard key={currentPlayer ? currentPlayer.id : "empty"} player={currentPlayer} />
          </div>
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

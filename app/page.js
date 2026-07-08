"use client";

import { useState, useEffect, useCallback } from "react";
import {
  TOTAL_PURSE,
  DEFAULT_TEAMS,
  TEAM_COLORS,
  STORAGE_KEY,
  formatCurrency,
  formatCompactCurrency,
} from "./lib/teams";
import { CURRENT_PLAYER_KEY, getBasePrice } from "./lib/players";

const INTRO_VISIBLE_KEY = "ehpl-intro-visible";

const INTRO_PARTICLES = Array.from({ length: 28 }, (_, index) => ({
  left: `${8 + ((index * 37) % 84)}%`,
  bottom: `${8 + ((index * 19) % 34)}%`,
  size: `${3 + (index % 5)}px`,
  duration: `${5 + (index % 6) * 0.7}s`,
  delay: `${(index % 9) * 0.35}s`,
}));

function IntroScreen() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background text-foreground flex items-center justify-center">
      <div className="absolute inset-0 intro-bg-glow" />
      <div className="absolute inset-x-0 bottom-0 h-[58vh] intro-grid-floor" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 perspective-[1400px]">
        <div className="relative w-[min(780px,96vw)] aspect-[4/3] preserve-3d animate-intro-float">
          <div className="absolute inset-0 rounded-[34px] border-[2.5px] border-gold/50 bg-[linear-gradient(160deg,#1a1a28_0%,#0d0d18_50%,#12121a_100%)] shadow-[0_0_110px_rgba(212,168,83,0.28),0_44px_96px_rgba(0,0,0,0.78),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl overflow-hidden flex flex-col items-center justify-center px-8 py-12 sm:px-10 sm:py-16">
            <div className="absolute inset-0 animate-intro-shine bg-[linear-gradient(115deg,transparent_25%,rgba(255,255,255,0.04)_42%,rgba(240,212,138,0.13)_50%,rgba(255,255,255,0.04)_58%,transparent_75%)]" />
            <div className="absolute left-0 right-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,#d4a853,transparent)]" />
            <div
              className="absolute left-[-58px] top-[5%] bottom-[5%] w-11 rounded-xl border border-gold/20 bg-[linear-gradient(180deg,rgba(212,168,83,0.08),rgba(212,168,83,0.01))]"
              style={{ transform: "rotateY(22deg)" }}
            />
            <div
              className="absolute right-[-58px] top-[5%] bottom-[5%] w-11 rounded-xl border border-gold/20 bg-[linear-gradient(180deg,rgba(212,168,83,0.08),rgba(212,168,83,0.01))]"
              style={{ transform: "rotateY(-22deg)" }}
            />

            <div className="absolute inset-0 pointer-events-none">
              {INTRO_PARTICLES.map((particle, index) => (
                <span
                  key={index}
                  className="absolute rounded-full bg-gold animate-intro-particle"
                  style={{
                    left: particle.left,
                    bottom: particle.bottom,
                    width: particle.size,
                    height: particle.size,
                    animationDuration: particle.duration,
                    animationDelay: particle.delay,
                  }}
                />
              ))}
            </div>

            <p className="relative z-10 text-[clamp(0.86rem,1.4vw,1rem)] tracking-[0.4em] uppercase text-gold/90 mb-4">
              Welcome to
            </p>
            <h1 className="relative z-10 text-[clamp(2.4rem,6.4vw,4.8rem)] font-black tracking-[0.06em] uppercase leading-none text-gradient-gold glow-gold whitespace-nowrap">
              EHPL Auction
            </h1>
            <div className="relative z-10 my-7 h-[3px] w-32 rounded-full bg-[linear-gradient(90deg,transparent,#d4a853,transparent)]" />
            <p className="relative z-10 text-[clamp(1.9rem,4.7vw,3.25rem)] font-extrabold tracking-[0.32em] uppercase text-foreground text-center">
              Season 9
            </p>
            <p className="relative z-10 mt-5 text-[clamp(0.86rem,1.35vw,1rem)] tracking-[0.22em] uppercase text-muted text-center">
              Live Auction · 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
              backgroundImage:
                percentage < 0
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
  const theme = {
    color: "#d4a853",
    colorLight: "#f0d48a",
    colorDark: "#a8842f",
    bgGradient: "linear-gradient(135deg, #d4a85320, #a8842f10)",
    border: "#d4a85340",
  };

  if (!player) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center border border-white/10 rounded-2xl bg-card-bg/40 backdrop-blur-sm p-6 text-center relative overflow-hidden h-full min-h-[400px]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
        <div className="absolute w-[250px] h-[250px] bg-gold/5 rounded-full blur-3xl" />

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

  const basePrice = getBasePrice(player);
  const activityColors = {
    cricket: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    football: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    basketball: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    badminton: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    tennis: "bg-lime-500/10 text-lime-400 border-lime-500/30",
    hockey: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    default: "bg-white/5 text-foreground border-white/10",
  };

  const activity = player.activity || "N/A";

  return (
    <div
      className={`flex-1 flex flex-col justify-between rounded-3xl border bg-gradient-to-br from-[#12121a] via-[#0d0d14] to-[#0a0a0f] backdrop-blur-xl p-5 sm:p-7 lg:p-9 transition-all duration-500 overflow-hidden relative ${player.status === "in-auction" ? "player-panel-glow-active" : "player-panel-glow"
        }`}
      style={{
        borderColor: `${theme.color}35`,
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none"
        style={{ background: theme.color }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-[60px] opacity-10 pointer-events-none"
        style={{ background: theme.color }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${theme.color}, transparent)` }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        {/* Player Name - Hero */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3.5 mb-1.5">
            <p className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em] mb-0">Player Name</p>
            {player.unsoldOnce && (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded border border-accent-red/40 bg-accent-red/10 text-accent-red uppercase tracking-wider animate-pulse">
                Unsold Once
              </span>
            )}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight uppercase leading-none break-words">
            {player.name}
          </h2>
        </div>

        {/* Divider */}
        <div
          className="w-full h-[1px] mb-6 sm:mb-8 opacity-30"
          style={{ background: `linear-gradient(90deg, ${theme.color}60, transparent)` }}
        />

        {/* Info Grid: Activity + Base Price */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Activity Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            <p className="text-[9px] sm:text-[10px] text-muted uppercase tracking-[0.2em] mb-2">Activity</p>
            <p className="text-xl sm:text-2xl font-black tracking-wide uppercase" style={{ color: theme.color }}>
              {activity}
            </p>
          </div>

          {/* Base Price Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            <p className="text-[9px] sm:text-[10px] text-muted uppercase tracking-[0.2em] mb-2">Base Price</p>
            <div className="flex items-baseline gap-0.5">
              <span className="text-lg sm:text-xl font-black tracking-tight" style={{ color: theme.color }}>
                ₹
              </span>
              <span className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: theme.color }}>
                {basePrice.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>

        {player.prevTeam && (
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5 backdrop-blur-sm mt-3 sm:mt-4 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            <p className="text-[9px] sm:text-[10px] text-muted uppercase tracking-[0.2em] mb-2">Previous Team</p>
            <p className="text-xl sm:text-2xl font-black tracking-wide uppercase text-gold">
              {player.prevTeam}
            </p>
          </div>
        )}
      </div>

      {/* Live Bidding Indicator - Bottom Left Corner */}
      {player.status === "in-auction" && (
        <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 z-20">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-accent-green/10 border border-accent-green/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-ping" />
            <span className="text-[10px] sm:text-xs text-accent-green font-bold uppercase tracking-widest">
              Live Bidding
            </span>
          </div>
        </div>
      )}

      {/* Sold/Unsold Announcement Overlay */}
      {(player.status === "sold" || player.status === "unsold") && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in">
          <div
            className={`absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-40 animate-pulse ${player.status === "sold" ? "bg-accent-green" : "bg-accent-red"
              }`}
          />

          <div className="text-center z-10 p-6 flex flex-col items-center justify-center animate-scale-up-bounce">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 ${player.status === "sold"
                  ? "bg-accent-green/10 text-accent-green border-accent-green/30"
                  : "bg-accent-red/10 text-accent-red border-accent-red/30"
                }`}
            >
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

            <h2
              className={`text-5xl sm:text-6xl font-black uppercase tracking-widest leading-none mb-4 ${player.status === "sold" ? "text-accent-green glow-green" : "text-accent-red glow-red"
                }`}
            >
              {player.status === "sold" ? "SOLD" : "UNSOLD"}
            </h2>

            <div className="w-20 h-1 bg-white/20 my-4 rounded-full" />

            <p className="text-[10px] sm:text-xs text-muted uppercase tracking-widest mb-1">Player Name</p>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground truncate max-w-[320px]">
              {player.name}
            </h3>
            {player.status === "sold" && player.soldTo && (
              <div className="mt-6 px-8 sm:px-10 py-5 rounded-2xl bg-accent-green/10 border-2 border-accent-green/30 shadow-[0_0_40px_rgba(34,197,94,0.15)]">
                <p className="text-xs sm:text-sm text-muted uppercase tracking-widest mb-2">
                  Sold To
                </p>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent-green uppercase leading-none glow-green">
                  {player.soldTo}
                </p>
                {player.price && (
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mt-3">
                    {formatCurrency(player.price)}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function DisplayPage() {
  const [showIntro, setShowIntro] = useState(false);
  const [teams, setTeams] = useState(DEFAULT_TEAMS);
  const [updatedIds, setUpdatedIds] = useState(new Set());
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const loadTeams = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setTeams((prev) => {
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

  const loadIntroState = useCallback(() => {
    try {
      setShowIntro(localStorage.getItem(INTRO_VISIBLE_KEY) === "1");
    } catch (e) {
      console.error("Failed to load intro state:", e);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadTeams();
      loadCurrentPlayer();
      loadIntroState();
    }, 0);

    const handleStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        loadTeams();
      }
      if (e.key === CURRENT_PLAYER_KEY) {
        loadCurrentPlayer();
      }
      if (e.key === INTRO_VISIBLE_KEY) {
        loadIntroState();
      }
    };

    window.addEventListener("storage", handleStorage);

    const interval = setInterval(() => {
      loadTeams();
      loadCurrentPlayer();
      loadIntroState();
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, [loadTeams, loadCurrentPlayer, loadIntroState]);

  // Calculate totals
  const totalRemaining = teams.reduce((sum, t) => sum + t.purse, 0);
  const totalBudget = TOTAL_PURSE * 12;
  const totalSpent = totalBudget - totalRemaining;

  if (showIntro) {
    return <IntroScreen />;
  }

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
                {formatCompactCurrency(totalRemaining)}
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
            Purse per team: {formatCompactCurrency(TOTAL_PURSE)}
          </p>
        </div>
      </footer>
    </div>
  );
}

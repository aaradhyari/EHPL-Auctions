@import "tailwindcss";

@theme inline {
  --color-background: #0a0a0f;
  --color-foreground: #f0e6d3;
  --color-gold: #d4a853;
  --color-gold-light: #f0d48a;
  --color-gold-dark: #a8842f;
  --color-card-bg: #12121a;
  --color-card-border: #1e1e2e;
  --color-card-hover: #1a1a28;
  --color-surface: #16161f;
  --color-accent-green: #22c55e;
  --color-accent-red: #ef4444;
  --color-muted: #6b7280;
  --color-admin-bg: #0d0d14;
  --font-sans: var(--font-outfit);
  --font-mono: var(--font-geist-mono);
}

/* Base styles */
* {
  box-sizing: border-box;
}

body {
  background: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans), system-ui, sans-serif;
  margin: 0;
  padding: 0;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--color-background);
}
::-webkit-scrollbar-thumb {
  background: var(--color-gold-dark);
  border-radius: 3px;
}

/* Shimmer animation for progress bars */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes pulse-gold {
  0%, 100% { box-shadow: 0 0 0 0 rgba(212, 168, 83, 0.3); }
  50% { box-shadow: 0 0 20px 4px rgba(212, 168, 83, 0.15); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes countUpdate {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}

.animate-slide-in {
  animation: slideInScale 0.4s ease-out forwards;
}

.animate-count-update {
  animation: countUpdate 0.3s ease-in-out;
}

/* Progress bar shimmer */
.progress-shimmer {
  background: linear-gradient(
    90deg,
    var(--color-gold-dark) 0%,
    var(--color-gold-light) 50%,
    var(--color-gold-dark) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}

/* Card hover glow */
.card-glow {
  transition: all 0.3s ease;
}
.card-glow:hover {
  animation: pulse-gold 2s ease-in-out infinite;
  border-color: var(--color-gold-dark) !important;
}

/* Gold gradient text */
.text-gradient-gold {
  background: linear-gradient(135deg, var(--color-gold-light), var(--color-gold), var(--color-gold-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glow effects */
.glow-gold {
  text-shadow: 0 0 20px rgba(212, 168, 83, 0.3);
}

/* Custom number input */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

/* Player Card Styles */
@keyframes gold-shimmer-text {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.text-gold-shimmer {
  background: linear-gradient(90deg, #f0d48a, #d4a853, #a8842f, #f0d48a);
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gold-shimmer-text 4s ease infinite;
}

.player-panel-glow {
  box-shadow: 0 0 40px -10px rgba(212, 168, 83, 0.15);
  border: 1px solid rgba(212, 168, 83, 0.25);
}

.player-panel-glow-active {
  box-shadow: 0 0 50px -5px rgba(212, 168, 83, 0.35);
  border: 1px solid rgba(212, 168, 83, 0.5);
  animation: pulse-gold 3s ease-in-out infinite;
}

/* Glassmorphism panel styling */
.glass-panel {
  background: rgba(18, 18, 26, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Custom scrollbar for player list */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.02);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(212, 168, 83, 0.3);
  border-radius: 2px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(212, 168, 83, 0.6);
}

/* Announcement Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleUpBounce {
  0% { transform: scale(0.6); opacity: 0; }
  50% { transform: scale(1.05); }
  75% { transform: scale(0.95); }
  100% { transform: scale(1); opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}

.animate-scale-up-bounce {
  animation: scaleUpBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.glow-green {
  text-shadow: 0 0 15px rgba(34, 197, 94, 0.5), 0 0 30px rgba(34, 197, 94, 0.2);
}

.glow-red {
  text-shadow: 0 0 15px rgba(239, 68, 68, 0.5), 0 0 30px rgba(239, 68, 68, 0.2);
}

/* React intro screen */
.intro-bg-glow {
  background:
    radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212, 168, 83, 0.12) 0%, transparent 60%),
    radial-gradient(ellipse 50% 70% at 20% 80%, rgba(34, 197, 94, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse 50% 70% at 80% 20%, rgba(239, 68, 68, 0.06) 0%, transparent 50%);
  animation: introGlowPulse 6s ease-in-out infinite;
}

.intro-grid-floor {
  background:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 70px 70px;
  transform: perspective(700px) rotateX(55deg);
  transform-origin: bottom center;
  opacity: 0.6;
  animation: introGridScroll 25s linear infinite;
}

.preserve-3d {
  transform-style: preserve-3d;
}

@keyframes introGlowPulse {
  0%, 100% {
    opacity: 0.82;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.08);
  }
}

@keyframes introGridScroll {
  0% { background-position: 0 0; }
  100% { background-position: 0 70px; }
}

@keyframes introFloat {
  0%, 100% { transform: translateY(0) rotateX(5deg) rotateY(-8deg); }
  50% { transform: translateY(-28px) rotateX(10deg) rotateY(-4deg); }
}

@keyframes introShine {
  0%, 100% { transform: translateX(-140%); }
  50% { transform: translateX(140%); }
}

@keyframes introParticleRise {
  0% {
    opacity: 0;
    transform: translateY(0) translateX(0) scale(1);
  }
  10% { opacity: 1; }
  90% { opacity: 0.25; }
  100% {
    opacity: 0;
    transform: translateY(-380px) translateX(60px) scale(0);
  }
}

.animate-intro-float {
  animation: introFloat 7s ease-in-out infinite;
}

.animate-intro-shine {
  animation: introShine 5s ease-in-out infinite;
}

.animate-intro-particle {
  animation: introParticleRise linear infinite;
}

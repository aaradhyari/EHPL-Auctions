// Player grades and their configuration
export const GRADES = {
  A: {
    label: "Grade A",
    folder: "grade-a",
    color: "#d4a853",
    colorLight: "#f0d48a",
    colorDark: "#a8842f",
    bgGradient: "linear-gradient(135deg, #d4a85320, #a8842f10)",
    border: "#d4a85340",
  },
  B: {
    label: "Grade B",
    folder: "grade-b",
    color: "#94a3b8",
    colorLight: "#cbd5e1",
    colorDark: "#64748b",
    bgGradient: "linear-gradient(135deg, #94a3b820, #64748b10)",
    border: "#94a3b840",
  },
  C: {
    label: "Grade C",
    folder: "grade-c",
    color: "#cd7f32",
    colorLight: "#daa06d",
    colorDark: "#a0522d",
    bgGradient: "linear-gradient(135deg, #cd7f3220, #a0522d10)",
    border: "#cd7f3240",
  },
};

// Default player pool — update names as needed, drop matching PNGs in public/players/<grade>/
export const DEFAULT_PLAYERS = [
  // Grade A players
  { id: "a1", name: "Player A1", grade: "A", image: "player-a1.png", status: "available" },
  { id: "a2", name: "Player A2", grade: "A", image: "player-a2.png", status: "available" },
  { id: "a3", name: "Player A3", grade: "A", image: "player-a3.png", status: "available" },
  { id: "a4", name: "Player A4", grade: "A", image: "player-a4.png", status: "available" },
  { id: "a5", name: "Player A5", grade: "A", image: "player-a5.png", status: "available" },
  { id: "a6", name: "Player A6", grade: "A", image: "player-a6.png", status: "available" },
  { id: "a7", name: "Player A7", grade: "A", image: "player-a7.png", status: "available" },
  { id: "a8", name: "Player A8", grade: "A", image: "player-a8.png", status: "available" },

  // Grade B players
  { id: "b1", name: "Player B1", grade: "B", image: "player-b1.png", status: "available" },
  { id: "b2", name: "Player B2", grade: "B", image: "player-b2.png", status: "available" },
  { id: "b3", name: "Player B3", grade: "B", image: "player-b3.png", status: "available" },
  { id: "b4", name: "Player B4", grade: "B", image: "player-b4.png", status: "available" },
  { id: "b5", name: "Player B5", grade: "B", image: "player-b5.png", status: "available" },
  { id: "b6", name: "Player B6", grade: "B", image: "player-b6.png", status: "available" },
  { id: "b7", name: "Player B7", grade: "B", image: "player-b7.png", status: "available" },
  { id: "b8", name: "Player B8", grade: "B", image: "player-b8.png", status: "available" },

  // Grade C players
  { id: "c1", name: "Player C1", grade: "C", image: "player-c1.png", status: "available" },
  { id: "c2", name: "Player C2", grade: "C", image: "player-c2.png", status: "available" },
  { id: "c3", name: "Player C3", grade: "C", image: "player-c3.png", status: "available" },
  { id: "c4", name: "Player C4", grade: "C", image: "player-c4.png", status: "available" },
  { id: "c5", name: "Player C5", grade: "C", image: "player-c5.png", status: "available" },
  { id: "c6", name: "Player C6", grade: "C", image: "player-c6.png", status: "available" },
  { id: "c7", name: "Player C7", grade: "C", image: "player-c7.png", status: "available" },
  { id: "c8", name: "Player C8", grade: "C", image: "player-c8.png", status: "available" },
];

export const PLAYERS_STORAGE_KEY = "ehpl-auction-players";
export const CURRENT_PLAYER_KEY = "ehpl-auction-current-player";

/**
 * Get the image path for a player.
 * Images are expected at /players/<grade-folder>/<image-filename>
 */
export function getPlayerImagePath(player) {
  const grade = GRADES[player.grade];
  if (!grade) return null;
  return `/players/${grade.folder}/${player.image}`;
}

/**
 * Group players by grade
 */
export function groupPlayersByGrade(players) {
  return {
    A: players.filter((p) => p.grade === "A"),
    B: players.filter((p) => p.grade === "B"),
    C: players.filter((p) => p.grade === "C"),
  };
}

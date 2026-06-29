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
};

// Default player pool — update names and activity as needed
export const DEFAULT_PLAYERS = [
  // Grade A players
  { id: "a1", name: "Player A1", grade: "A", activity: "Cricket", image: "player-a1.png", status: "available" },
  { id: "a2", name: "Player A2", grade: "A", activity: "Football", image: "player-a2.png", status: "available" },
  { id: "a3", name: "Player A3", grade: "A", activity: "Basketball", image: "player-a3.png", status: "available" },
  { id: "a4", name: "Player A4", grade: "A", activity: "Cricket", image: "player-a4.png", status: "available" },
  { id: "a5", name: "Player A5", grade: "A", activity: "Football", image: "player-a5.png", status: "available" },
  { id: "a6", name: "Player A6", grade: "A", activity: "Basketball", image: "player-a6.png", status: "available" },
  { id: "a7", name: "Player A7", grade: "A", activity: "Cricket", image: "player-a7.png", status: "available" },
  { id: "a8", name: "Player A8", grade: "A", activity: "Badminton", image: "player-a8.png", status: "available" },

  // Grade B players
  { id: "b1", name: "Player B1", grade: "B", activity: "Football", image: "player-b1.png", status: "available" },
  { id: "b2", name: "Player B2", grade: "B", activity: "Cricket", image: "player-b2.png", status: "available" },
  { id: "b3", name: "Player B3", grade: "B", activity: "Tennis", image: "player-b3.png", status: "available" },
  { id: "b4", name: "Player B4", grade: "B", activity: "Hockey", image: "player-b4.png", status: "available" },
  { id: "b5", name: "Player B5", grade: "B", activity: "Football", image: "player-b5.png", status: "available" },
  { id: "b6", name: "Player B6", grade: "B", activity: "Basketball", image: "player-b6.png", status: "available" },
  { id: "b7", name: "Player B7", grade: "B", activity: "Cricket", image: "player-b7.png", status: "available" },
  { id: "b8", name: "Player B8", grade: "B", activity: "Tennis", image: "player-b8.png", status: "available" },


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
  };
}

/**
 * Get base price for a player based on their grade
 */
export function getBasePrice(player) {
  const basePrices = {
    A: 20000,
    B: 10000,
  };
  return basePrices[player.grade] || 0;
}

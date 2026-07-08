// Default player pool — update names and activity as needed
export const DEFAULT_PLAYERS = [
  { id: "a1", name: "Player A1", activity: "Cricket", gender: "male", prevTeam: "Raptors", status: "available" },
  { id: "a2", name: "Player A2", activity: "Football", gender: "male", status: "available" },
  { id: "a3", name: "Player A3", activity: "Basketball", gender: "male", status: "available" },
  { id: "a4", name: "Player A4", activity: "Cricket", gender: "male", status: "available" },
  { id: "a5", name: "Player A5", activity: "Football", gender: "male", prevTeam: "Strikers", status: "available" },
  { id: "a6", name: "Player A6", activity: "Basketball", gender: "male", status: "available" },
  { id: "a7", name: "Player A7", activity: "Cricket", gender: "male", status: "available" },
  { id: "a8", name: "Player A8", activity: "Badminton", gender: "male", status: "available" },

  { id: "b1", name: "Player B1", activity: "Football", gender: "male", status: "available" },
  { id: "b2", name: "Player B2", activity: "Cricket", gender: "male", status: "available" },
  { id: "b3", name: "Player B3", activity: "Tennis", gender: "male", status: "available" },
  { id: "b4", name: "Player B4", activity: "Hockey", gender: "male", status: "available" },
  { id: "b5", name: "Player B5 (F)", activity: "Football", gender: "female", prevTeam: "Knights", status: "available" },
  { id: "b6", name: "Player B6 (F)", activity: "Basketball", gender: "female", status: "available" },
  { id: "b7", name: "Player B7 (F)", activity: "Cricket", gender: "female", status: "available" },
  { id: "b8", name: "Player B8 (F)", activity: "Tennis", gender: "female", status: "available" },
];

export const PLAYERS_STORAGE_KEY = "ehpl-auction-players";
export const CURRENT_PLAYER_KEY = "ehpl-auction-current-player";

/**
 * Get base price for a player
 */
export function getBasePrice(player) {
  return 20000;
}

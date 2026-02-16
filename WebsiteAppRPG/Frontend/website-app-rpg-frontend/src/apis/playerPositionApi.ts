import { PlayerPosition } from "../models/playerPosition";

const apiUrl = "http://localhost:5126/apis/player_positions";

export async function fetchPlayerPositions(): Promise<PlayerPosition[]> {
  const promise = await fetch(apiUrl);
  return promise.json();
}

export async function updatePlayerPosition(playerId: number, mapId: number, x: number, y: number) : Promise<void> {
  await fetch(`http://localhost:5126/apis/players/${playerId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mapId, x, y })
  });
}

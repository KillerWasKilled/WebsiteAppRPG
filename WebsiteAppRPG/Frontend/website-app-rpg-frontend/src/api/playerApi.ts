import { Player } from "../models/player";

const apiUrl = "http://localhost:5126/apis/players";

export async function fetchPlayers(): Promise<Player[]> {
  const promise = await fetch(apiUrl);
  return promise.json();
}

export async function updatePlayerPosition(playerId: number, x: number, y: number) : Promise<void> {
  await fetch(`http://localhost:5126/apis/players/${playerId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ x, y })
  });
}
import { Player } from "../models/player";

const apiUrl = "http://localhost:5126/api/players";

export async function fetchPlayers(): Promise<Player[]> {
  const response = await fetch(apiUrl);
  return response.json();
}

export async function movePlayer(
  name: string,
  direction: string
): Promise<Player[]> {
  const response = await fetch(`${apiUrl}/${name}/move`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(direction)
  });

  return response.json();
}
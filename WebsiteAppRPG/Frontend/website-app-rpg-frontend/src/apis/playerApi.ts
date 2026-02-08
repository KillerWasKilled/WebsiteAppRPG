import { Player } from "../models/player";

const apiUrl = "https://localhost:7151/apis/players";

export async function fetchPlayers(): Promise<Player[]> {
  const response = await fetch(apiUrl);
  return response.json();
}

export async function createPlayer(email: string, name: string, password: string) {
  const response = await fetch(`http://localhost:5126/apis/players/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name, password })
  });

  return await response.json();
}
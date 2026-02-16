import { Player } from "../models/player";

const apiUrl = "https://localhost:7151/apis/players";

export async function fetchPlayers(): Promise<Player[]> {
  const response = await fetch(apiUrl, {
    credentials: "include"
  });
  return response.json();
}

export async function createPlayer(email: string, name: string, password: string) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name, password }),
    credentials: "include"
  });

  return await response.json();
}
import { Player } from "../models/player";

const apiUrl = "https://localhost:7151/apis/players";

export async function fetchPlayers(): Promise<Player[]> {
  const promise = await fetch(apiUrl);
  return promise.json();
}
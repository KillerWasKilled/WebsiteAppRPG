import { Character } from "../models/character";

const apiUrl = "http://localhost:5126/apis/characters";

export async function fetchCharacters(): Promise<Character[]> {
  const promise = await fetch(apiUrl);
  return promise.json();
}
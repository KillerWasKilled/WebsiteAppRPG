import { Map } from "../models/map";

const apiUrl = "http://localhost:5126/api/maps";

export async function fetchMaps(): Promise<Map[]> {
  const response = await fetch(apiUrl);
  return response.json();
}
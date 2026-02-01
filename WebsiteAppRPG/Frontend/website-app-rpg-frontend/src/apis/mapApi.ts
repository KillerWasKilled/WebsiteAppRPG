import { Map } from "../models/map";

const apiUrl = "http://localhost:5126/apis/maps";

export async function fetchMaps(): Promise<Map[]> {
  const promise = await fetch(apiUrl);
  return promise.json();
}
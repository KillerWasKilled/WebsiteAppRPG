import { MapBarrier } from "../models/mapBarrier";

const apiUrl = "http://localhost:5126/apis/map_barriers";

export async function fetchMapBarriers(): Promise<MapBarrier[]> {
  const promise = await fetch(apiUrl);
  return promise.json();
}
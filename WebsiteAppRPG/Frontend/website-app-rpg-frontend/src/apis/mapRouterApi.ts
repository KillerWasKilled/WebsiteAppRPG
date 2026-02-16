import { MapRouter } from "../models/mapRouter";

const apiUrl = "http://localhost:5126/apis/map_routers";

export async function fetchMapRouters(): Promise<MapRouter[]> {
  const promise = await fetch(apiUrl);
  return promise.json();
}
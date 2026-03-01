import { MapObstacle } from "../models/mapObstacle";

const apiUrl = "http://localhost:5126/apis/map_obstacles";

export async function fetchMapObstacles(): Promise<MapObstacle[]> {
  const promise = await fetch(apiUrl);
  return promise.json();
}

export async function deleteMapObstacle(mapObstacleId: number, x: number, y: number) {
  const response = await fetch(apiUrl, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
    credentials: "include",
    body: JSON.stringify({ mapObstacleId: mapObstacleId, x: x, y: y }),
  });

  if (!response.ok) {
    throw new Error("Delete failed");
  }

  return;  
}
import { useEffect, /*useRef,*/ useState } from "react";

import { Map } from "../models/map";

import { fetchMaps } from "../api/mapApi";

import "./map.css"

export default function GameMap() {
  const [maps, setMaps] = useState<Map[]>([]);

  useEffect(() => {
    fetchMaps()
    .then(data => setMaps(data))
    .catch(err => console.error("fetchMaps error: ", err))
  }, [])

  if (maps.length === 0) {
    return <div>Loading map...</div>; // počká, než se data načtou
  }

  const currentMap: Map = maps[0];

  let mapWidth: String[] = [];
  let mapHeight: String[] = [];
  
  for (let index = 0; index < Number(currentMap.mapWidth); index++) {
    mapWidth.push(" ");
  }

  for (let index = 0; index < Number(currentMap.mapHeight); index++) {
    mapHeight.push(" ");
  }

  return(
    <div className="mapBox">
        {mapHeight.map(() => (
            <div className="mapLine">
                {mapWidth.map((map, index) => (
                    <span className="mapPoint">
                        {map}
                    </span>
                ))}
            </div>
        ))}
    </div>
  );
}
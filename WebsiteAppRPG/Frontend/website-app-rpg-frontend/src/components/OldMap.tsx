import { useEffect, /*useRef,*/ useState } from "react";

import { Player } from "../models/player";
import { fetchPlayers } from "../apis/playerApi";

import { Map } from "../models/map";
import { fetchMaps } from "../apis/mapApi";

import { PlayerPosition } from "../models/playerPosition"
import { fetchPlayerPositions } from "../apis/playerPositionApi"

import "./map.css"

export default function GameMap() {
  const [maps, setMaps] = useState<Map[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);

  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetchPlayers()
    .then(data => {
      setPlayers(data)
      setPlayerPosition({ x: data[0].positionX, y: data[0].positionY });
    })
    .catch(err => console.error("fetchPlayers error: ", err));
  }, []);

  useEffect(() => {
    fetchMaps()
    .then(data => setMaps(data))
    .catch(err => console.error("fetchMaps error: ", err));
  }, [maps]);

  useEffect(() => {
    if (maps.length === 0 ) {
      return;
    }

    function handleUserInput(e: KeyboardEvent) : void {
      const latestMap = maps[maps.length - 1];
      
      const width = Number(latestMap.width);
      const height = Number(latestMap.height);

      let x = playerPosition.x;
      let y = playerPosition.y;

      if (e.key === "a" && x - 1 >= 0) {
        x--;
      }

      else if (e.key === "w" && y - 1 >= 0) {
        y--;
      }

      else if (e.key === "s" && y + 1 < height) {
        y++;
      }

      else if (e.key === "d" && x + 1 < width) {
        x++;
      }

      updatePlayerPosition(players[0].playerID, x, y);
      setPlayerPosition({ x: x, y: y });
    }

    window.addEventListener("keydown", handleUserInput);

    return () => window.removeEventListener("keydown", handleUserInput);


  }, [maps]);

  if (maps.length === 0) {
    return <div>Loading...</div>
  }

  else {
    let latestMap: Map = maps[maps.length - 1];

    let mapWidthNumber: number = Number(latestMap.width);
    let lastMapWidth: string[] = [];

    for (let i = 0; i < mapWidthNumber; i++) {
      lastMapWidth.push(' ');
    }

    let mapHeightNumber: number = Number(latestMap.height);
    let lastMapHeight: string[] = [];

    for (let i = 0; i < mapHeightNumber; i++) {
      lastMapHeight.push(' ');
    }

    return (
      <div className="map-box">

        {lastMapHeight.map((_, lineIndex) => (
          
          <div className="map-row" key={lineIndex}>
          
            {lastMapWidth.map((_, columnIndex) => {

              const playerExists = players.some((player, playerIndex, players) => 
                player.positionX === columnIndex && player.positionY === lineIndex);

              return(
                <span className= {playerExists ? "point player-point" : "point map-point"}  key={columnIndex}>
                </span>
              )

              /*
              players.map((player, playerIndex) => (
                <span className= {player.positionX == playerPosition.x && player.positionY == playerPosition.y  ? "point player-point" : "point map-point"}  key={columnIndex}>
                </span>
              ))*/
            })}
          
          </div>
        
        ))}
      </div>
    );
  }
}
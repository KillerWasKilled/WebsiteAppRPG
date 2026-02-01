import { useEffect, /*useRef,*/ useState } from "react";
"./map.css";

import { Player } from "../models/player";
import { fetchPlayers } from "../apis/playerApi";

import { Map } from "../models/map"
import { fetchMaps } from "../apis/mapApi"

import { PlayerPosition } from "../models/playerPosition";
import { fetchPlayerPositions } from "../apis/playerPositionApi";

/*
import { MapBarrier } from "../models/mapBarrier";
import { fetchMapBarriers } from "../apis/mapBarrierApi";
*/

import MapPoint from "./MapPoint";

export default function GameMap() {
    let [maps, setMaps] = useState<Map[] | null>(null);
    let [players, setPlayers] = useState<Player[] | null>(null);
    let [playerPositions, setPlayerPositions] = useState<PlayerPosition[] | null>(null);

    useEffect(() => {
        fetchMaps().then(data => {
            setMaps(data);
        });

    }, []);

    useEffect(() => {
        fetchPlayers().then(data => {
            console.log("PLAYERS FROM API:", data);
            setPlayers(data);
        });

    }, [])

    useEffect(() => {
        fetchPlayerPositions().then(data => {
            setPlayerPositions(data);
        });

    }, [])

    /*
    useEffect(() => {

        function moveAround(e: KeyboardEvent) {
            e.preventDefault();

            console.log("ahoj");
        }

        window.addEventListener("keydown", moveAround);

        return () => window.removeEventListener("keypress", moveAround);
    }, []);
    */

    if (maps === null || players === null || playerPositions === null) {
        return <div>Waiting for data to be loaded 😑</div>
    }
    
    players.forEach(player => {
        console.log(player);
    });

    const player = players[0];
    console.log(player);
    console.log(player.characterID);

    return (
        <div className="map-box">
            {Array.from({ length: maps[0].height }).map((_, rowIndex) => (
                <div key={rowIndex} className="map-row">
                    <MapPoint width={maps[0].width} positionY={rowIndex} player={players[0]} playerPosition={playerPositions[0]} />
                </div>
            ))}
        </div>
    );

}
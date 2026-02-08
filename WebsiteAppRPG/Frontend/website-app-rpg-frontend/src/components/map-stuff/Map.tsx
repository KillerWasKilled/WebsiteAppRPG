import { useLocation } from "react-router-dom";

import { useEffect, /*useRef,*/ useState } from "react";
"./map.css";

import { Player } from "../../models/player"; 

import { Map } from "../../models/map";
import { fetchMaps } from "../../apis/mapApi"; 

import { PlayerPosition } from "../../models/playerPosition"; 
import { fetchPlayerPositions } from "../../apis/playerPositionApi"; 

import { updatePlayerPosition } from "../../apis/playerPositionApi";

import MapPoint from "./MapPoint";

import { MapBarrier } from "../../models/mapBarrier"; 
import { fetchMapBarriers } from "../../apis/mapBarrierApi"; 

export default function GameMap() {
    const location = useLocation();
    let player = location.state as Player;

    let [map, setMap] = useState<Map | null>(null);
    let [playerPosition, setPosition] = useState<PlayerPosition | null>(null);

    let [localBarriers, setLocalBarriers] = useState<MapBarrier[]>([]);
    useEffect(() => {
        fetchPlayerPositions().then(data => {

            const pp = data.find(pp => pp.playerId === player.playerId);

            if (pp) {
                setPosition(pp);
            }
        });
    }, []);

    useEffect(() => {
        if (!playerPosition) {
            return;
        }

        fetchMaps().then(data => {

            const pm = data.find(pm => pm.mapId === playerPosition.mapId);

            if (pm) {
                setMap(pm);
            }
        });
    }, [playerPosition]);

    useEffect(() => {

        if (!map || !playerPosition || !player) {
            return;
        }

        function moveAround(e: KeyboardEvent) {
            e.preventDefault();

            if (!map || !playerPosition || !player || !localBarriers) {
                return;
            }

            if (e.key === "ArrowLeft" || e.key === "a") {

                let blockedPart: MapBarrier | undefined;
                blockedPart = localBarriers.find(b => b.positionX === playerPosition.positionX - 1 && b.positionY === playerPosition.positionY);

                if (playerPosition.positionX - 1 >= 0 && blockedPart === undefined) {

                    let positionX = playerPosition.positionX - 1;
                    
                    setPosition(new PlayerPosition(playerPosition.playerPositionId, 
                        playerPosition.playerId, 
                        playerPosition.mapId, 
                        positionX, 
                        playerPosition.positionY
                    ));

                    updatePlayerPosition(playerPosition.playerId, positionX, playerPosition.positionY);
                }
            }

            else if (e.key === "ArrowUp" || e.key === "w") {

                let blockedPart: MapBarrier | undefined;
                blockedPart = localBarriers.find(b => b.positionX === playerPosition.positionX && b.positionY === playerPosition.positionY - 1);

                if (playerPosition.positionY - 1 >= 0 && blockedPart === undefined) {

                    let positionY = playerPosition.positionY - 1;
                    
                    setPosition(new PlayerPosition(
                        playerPosition.playerPositionId, 
                        playerPosition.playerId, 
                        playerPosition.mapId, 
                        playerPosition.positionX, 
                        positionY
                    ));

                    updatePlayerPosition(playerPosition.playerId, playerPosition.positionX, positionY);
                }
            }

            else if (e.key === "ArrowDown" || e.key === "s") {

                let blockedPart: MapBarrier | undefined;
                blockedPart = localBarriers.find(b => b.positionX === playerPosition.positionX && b.positionY === playerPosition.positionY + 1);

                if (playerPosition.positionY + 1 < map.height && blockedPart === undefined) {

                    let positionY = playerPosition.positionY + 1;
                    
                    setPosition(new PlayerPosition(
                        playerPosition.playerPositionId, 
                        playerPosition.playerId, 
                        playerPosition.mapId, 
                        playerPosition.positionX, 
                        positionY
                    ));

                    updatePlayerPosition(playerPosition.playerId, playerPosition.positionX, positionY);
                }
            }

            else if (e.key === "ArrowRight" || e.key === "d") {

                let blockedPart: MapBarrier | undefined;
                blockedPart = localBarriers.find(b => b.positionX === playerPosition.positionX + 1 && b.positionY === playerPosition.positionY);

                if (playerPosition.positionX + 1 < map.width && blockedPart === undefined) {

                    let positionX = playerPosition.positionX + 1;
                    
                    setPosition(new PlayerPosition(playerPosition.playerPositionId, 
                        playerPosition.playerId, 
                        playerPosition.mapId, 
                        positionX, 
                        playerPosition.positionY
                    ));

                    updatePlayerPosition(playerPosition.playerId, positionX, playerPosition.positionY);
                }
            }

            else {
                return;
            }
        }

        window.addEventListener("keydown", moveAround);

        return () => window.removeEventListener("keydown", moveAround);
    }, [map, playerPosition]);

    useEffect(() => {
        if (!map || !playerPosition) {
            return;
        }

        fetchMapBarriers().then(data => {
            if (!map) {
                return;
            }

            setLocalBarriers(data.filter(b => b.mapId === map.mapId));
        });
        
    }, [map]);

    if (!map || !playerPosition || localBarriers.length === 0) {
        return <div>Waiting for data to be loaded 😑</div>
    }

    return (
        <div className="map-box">
            {Array.from({ length: map.height }).map((_, rowIndex) => (
                <div key={rowIndex} className="map-row">
                    <MapPoint width={map.width} height={rowIndex} player={player} playerPosition={playerPosition} localBarriers={localBarriers} />
                </div>
            ))}
        </div>
    );

}
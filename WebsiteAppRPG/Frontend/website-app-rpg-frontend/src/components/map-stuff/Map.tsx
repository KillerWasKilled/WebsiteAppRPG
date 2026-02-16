import { useNavigate } from "react-router-dom";

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
import { fetchMapRouters } from "../../apis/mapRouterApi";
import type { MapRouter } from "../../models/mapRouter";

export default function GameMap() {
    const navigateTo = useNavigate();
    let [player, setPlayer] = useState<Player>(new Player(-1, "", "", "", -1));

    let [map, setMap] = useState<Map | null>(null);
    let [playerPosition, setPosition] = useState<PlayerPosition | null>(null);

    let [localBarriers, setLocalBarriers] = useState<MapBarrier[]>([]);
    let [localRouters, setLocalRouters] = useState<MapRouter[]>([]);

    useEffect(() => {
        const fetchPlayer = async () => {
            try {
                const response = await fetch("https://localhost:7151/apis/auth/me", {
                    method: "GET",
                    credentials: "include", // 👈 velmi důležité, aby se cookie poslala
                });

                if (!response.ok) {
                    throw new Error("Unauthorized");
                } 

                const playerData = await response.json();
                const loadedPlayer = new Player(Number(playerData.playerId), playerData.email, playerData.email, "", Number(playerData.characterId));

                setPlayer(loadedPlayer) // uložíme hráče do state
                // console.log(player);

            } catch {
                navigateTo("/login"); // token neplatný → přesměruj na login
            }
        };

        fetchPlayer();
    }, []);
    
    useEffect(() => {
        fetchPlayerPositions().then(data => {

            const pp = data.find(pp => pp.playerId === player.playerId);

            if (pp) {
                setPosition(pp);
            }
        });
    }, [player]);
    

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

        async function moveAround(e: KeyboardEvent) {
            e.preventDefault();

            if (!map || !playerPosition || !player) {
                return;
            }

            // console.log(e.key);

            if (e.key === "ArrowLeft" || e.key === "a") {

                let blockedPart: MapBarrier | undefined;
                let routerPart: MapRouter | undefined;
                
                blockedPart = localBarriers.find(b => b.positionX === playerPosition.positionX - 1 && b.positionY === playerPosition.positionY);
                routerPart = localRouters.find(r => r.enterPositionX === playerPosition.positionX - 1 && r.enterPositionY === playerPosition.positionY);

                if (playerPosition.positionX - 1 >= 0) {
                    if (blockedPart !== undefined) {
                        return;
                    }

                    else if (routerPart !== undefined) {
                        console.log(routerPart.destinationMapId);

                        let newMapId = routerPart.destinationMapId;
                        let newX = routerPart.exitPositionX;
                        let newY = routerPart.exitPositionY;

                        const newPos = new PlayerPosition(
                            playerPosition.playerPositionId,
                            playerPosition.playerId,
                            newMapId,
                            newX,
                            newY
                        );

                        setPosition(newPos);
                        await updatePlayerPosition(playerPosition.playerId, newMapId, newX, newY);
                    }

                    else {

                        let positionX = playerPosition.positionX - 1;
                        
                        setPosition(new PlayerPosition(
                            playerPosition.playerPositionId, 
                            playerPosition.playerId, 
                            playerPosition.mapId, 
                            positionX, 
                            playerPosition.positionY
                        ));

                        updatePlayerPosition(playerPosition.playerId, playerPosition.mapId, positionX, playerPosition.positionY);

                    }
                }

                /*
                if (playerPosition.positionX - 1 >= 0 && blockedPart === undefined) {

                    let positionX = playerPosition.positionX - 1;
                    
                    setPosition(new PlayerPosition(playerPosition.playerPositionId, 
                        playerPosition.playerId, 
                        playerPosition.mapId, 
                        positionX, 
                        playerPosition.positionY
                    ));

                    updatePlayerPosition(playerPosition.playerId, playerPosition.mapId, positionX, playerPosition.positionY);
                }

                else if (playerPosition.positionX - 1 >= 0 && routerPart !== undefined) {
                    
                    setPosition(new PlayerPosition(playerPosition.playerPositionId, 
                        playerPosition.playerId, 
                        routerPart.destinationMapId, 
                        routerPart.exitPositionX, 
                        routerPart.exitPositionY
                    ));
                    updatePlayerPosition(playerPosition.playerId, routerPart.destinationMapId, routerPart.exitPositionX, routerPart.exitPositionY);

                }
                */
            }

            else if (e.key === "ArrowUp" || e.key === "w") {

                let blockedPart: MapBarrier | undefined;
                let routerPart: MapRouter | undefined;

                blockedPart = localBarriers.find(b => b.positionX === playerPosition.positionX && b.positionY === playerPosition.positionY - 1);
                routerPart = localRouters.find(r => r.enterPositionX === playerPosition.positionX && r.enterPositionY === playerPosition.positionY - 1);

                if (playerPosition.positionY - 1 >= 0) {
                    if (blockedPart !== undefined) {
                        return;
                    }

                    else if (routerPart !== undefined) {
                        console.log(routerPart.destinationMapId);

                        let newMapId = routerPart.destinationMapId;
                        let newX = routerPart.exitPositionX;
                        let newY = routerPart.exitPositionY;

                        const newPos = new PlayerPosition(
                            playerPosition.playerPositionId,
                            playerPosition.playerId,
                            newMapId,
                            newX,
                            newY
                        );

                        setPosition(newPos);
                        await updatePlayerPosition(playerPosition.playerId, newMapId, newX, newY);   
                    }

                    else {

                        let positionY = playerPosition.positionY - 1;
                        
                        setPosition(new PlayerPosition(
                            playerPosition.playerPositionId, 
                            playerPosition.playerId, 
                            playerPosition.mapId, 
                            playerPosition.positionX, 
                            positionY
                        ));

                        updatePlayerPosition(playerPosition.playerId, playerPosition.mapId, playerPosition.positionX, positionY);


                    }
                }

                /*
                if (playerPosition.positionY - 1 >= 0 && blockedPart === undefined) {

                    let positionY = playerPosition.positionY - 1;
                    
                    setPosition(new PlayerPosition(
                        playerPosition.playerPositionId, 
                        playerPosition.playerId, 
                        playerPosition.mapId, 
                        playerPosition.positionX, 
                        positionY
                    ));

                    updatePlayerPosition(playerPosition.playerId, playerPosition.mapId, playerPosition.positionX, positionY);
                }
                */
            }

            else if (e.key === "ArrowDown" || e.key === "s") {
                let blockedPart: MapBarrier | undefined;
                let routerPart: MapRouter | undefined;

                blockedPart = localBarriers.find(b => b.positionX === playerPosition.positionX && b.positionY === playerPosition.positionY + 1);
                routerPart = localRouters.find(r => r.enterPositionX === playerPosition.positionX && r.enterPositionY === playerPosition.positionY + 1);
                console.log(routerPart);

                if (playerPosition.positionY + 1 < map.height) {
                    if (blockedPart !== undefined) {
                        return;
                    }

                    else if (routerPart !== undefined) {
                        console.log(routerPart.destinationMapId);

                        let newMapId = routerPart.destinationMapId;
                        let newX = routerPart.exitPositionX;
                        let newY = routerPart.exitPositionY;

                        const newPos = new PlayerPosition(
                            playerPosition.playerPositionId,
                            playerPosition.playerId,
                            newMapId,
                            newX,
                            newY
                        );

                        setPosition(newPos);
                        await updatePlayerPosition(playerPosition.playerId, newMapId, newX, newY);
                        
                    }

                    else {

                        let positionY = playerPosition.positionY + 1;
                        
                        setPosition(new PlayerPosition(
                            playerPosition.playerPositionId, 
                            playerPosition.playerId, 
                            playerPosition.mapId, 
                            playerPosition.positionX, 
                            positionY
                        ));

                        updatePlayerPosition(playerPosition.playerId, playerPosition.mapId, playerPosition.positionX, positionY);
                        
                    }
                }
            }

            else if (e.key === "ArrowRight" || e.key === "d") {

                let blockedPart: MapBarrier | undefined;
                let routerPart: MapRouter | undefined;
                blockedPart = localBarriers.find(b => b.positionX === playerPosition.positionX + 1 && b.positionY === playerPosition.positionY);
                routerPart = localRouters.find(r => r.enterPositionX === playerPosition.positionX + 1 && r.enterPositionY === playerPosition.positionY);

                if (playerPosition.positionX + 1 < map.width) {
                    if (blockedPart !== undefined) {
                        return;
                    }

                    else if (routerPart !== undefined) {
                        console.log(routerPart.destinationMapId);

                        let newMapId = routerPart.destinationMapId;
                        let newX = routerPart.exitPositionX;
                        let newY = routerPart.exitPositionY;

                        const newPos = new PlayerPosition(
                            playerPosition.playerPositionId,
                            playerPosition.playerId,
                            newMapId,
                            newX,
                            newY
                        );

                        setPosition(newPos);
                        await updatePlayerPosition(playerPosition.playerId, newMapId, newX, newY);
                        
                    }

                    else {

                        let positionX = playerPosition.positionX + 1;
                        
                        setPosition(new PlayerPosition(
                            playerPosition.playerPositionId, 
                            playerPosition.playerId, 
                            playerPosition.mapId, 
                            positionX, 
                            playerPosition.positionY
                        ));

                        updatePlayerPosition(playerPosition.playerId, playerPosition.mapId, positionX, playerPosition.positionY);

                    }
                }

                /*
                if (playerPosition.positionX + 1 < map.width && blockedPart === undefined) {

                    let positionX = playerPosition.positionX + 1;
                    
                    setPosition(new PlayerPosition(playerPosition.playerPositionId, 
                        playerPosition.playerId, 
                        playerPosition.mapId, 
                        positionX, 
                        playerPosition.positionY
                    ));

                    updatePlayerPosition(playerPosition.playerId, playerPosition.mapId, positionX, playerPosition.positionY); 
                }
                */
            }
        }

        window.addEventListener("keydown", moveAround);

        return () => window.removeEventListener("keydown", moveAround);
    }, [map, playerPosition, player]);

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

        fetchMapRouters().then(data => {
            if (!map) {
                return;
            }

            setLocalRouters(data.filter(r => r.mapId === map.mapId));
        });
        
    }, [map]);

    // console.log(map, localBarriers, player, playerPosition);
    if (!map || !playerPosition || player.characterId === -1) {
        return <div>Waiting for data to be loaded 😑</div>
    }

    return (
        <div className="map-box">
            {Array.from({ length: map.height }).map((_, rowIndex) => (
                <div key={rowIndex} className="map-row">
                    <MapPoint width={map.width} height={rowIndex} player={player} playerPosition={playerPosition} localBarriers={localBarriers} localRouters={localRouters} />
                </div>
            ))}
        </div>
    );

}
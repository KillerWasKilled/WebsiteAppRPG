// import { createSourceMapSource } from "typescript";
import { Player } from "../../models/player";
import { PlayerPosition } from "../../models/playerPosition";
import "./map.css";

import { MapBarrier } from "../../models/mapBarrier";
import { MapRouter } from "../../models/mapRouter";
import "./map.css";



export default function MapPoint({ width, height, player , playerPosition, localBarriers, localRouters } : 
    { width : number, height: number, player: Player, playerPosition: PlayerPosition, localBarriers : MapBarrier[], localRouters: MapRouter[] }) {

    function classHandler(index: number, characterId: string) {

        let barrierIsHere: boolean = false;
        let routerIsHere: boolean = false;

        localBarriers.forEach((barrier) => {
            if (barrier.positionX === index && barrier.positionY === height) {
                barrierIsHere = true;
            }
        });

        localRouters.forEach((router) => {
            if (router.enterPositionX === index && router.enterPositionY === height) {
                routerIsHere = true;
            }
        });
        
        if (barrierIsHere) {
            return `point map-barrier`;
        }

        if (routerIsHere) {
            return `point map-router`;
        }

        else if (playerPosition.positionX === index && playerPosition.positionY === height) {
            return `point character-${characterId}`;
        }

        else {
            return `point map-point`;
        }
    }

    let characterId = String(player.characterId).toString();
    return (
        <>
            {Array.from({ length: width }).map((_, index) => (
                <span className={classHandler(index, characterId)} key={index}>

                </span>
            ))}
        </>
    );
}

// playerPosition.positionY === height && playerPosition.positionX === index ? `point character-${characterId}` : "point map-point"
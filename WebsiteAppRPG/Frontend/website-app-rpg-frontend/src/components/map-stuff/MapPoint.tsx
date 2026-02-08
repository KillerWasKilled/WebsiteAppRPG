// import { createSourceMapSource } from "typescript";
import { Player } from "../../models/player";
import { PlayerPosition } from "../../models/playerPosition";
import "./map.css";

import type { MapBarrier } from "../../models/mapBarrier";
import "./map.css";



export default function MapPoint({ width, height, player , playerPosition, localBarriers } : 
    { width : number, height: number, player: Player, playerPosition: PlayerPosition, localBarriers : MapBarrier[] }) {

    function classHandler(index: number, characterId: string) {

        let barrierIsHere: boolean = false;
        localBarriers.forEach((barrier) => {
            if (barrier.positionX === index && barrier.positionY === height) {
                barrierIsHere = true;
            }
        });
        
        if (barrierIsHere) {
            return `point map-barrier`;
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
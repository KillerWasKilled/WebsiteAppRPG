import { createSourceMapSource } from "typescript";
import { Player } from "../models/player"
import { PlayerPosition } from "../models/playerPosition";
import "./map.css";

import "../models/character styles/simpsons-characters.css";
// import "../models/character styles/simpsons-characters.css";

export default function MapPoint({ width, positionY, player , playerPosition } : { width : number, positionY: number, player: Player, playerPosition: PlayerPosition }) {

    let characterId = String(player.characterID).toString();
    return (
        <>
            {Array.from({ length: width }).map((_, index) => (
                <span className={playerPosition.positionY === positionY && playerPosition.positionX === index ? `point character-${characterId}` : "point map-point"} key={index}>

                </span>
            ))}
        </>
    );
}
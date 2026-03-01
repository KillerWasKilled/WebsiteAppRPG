import Header from "./header-stuff/Header";
// import CharacterSelector from "./CharacterSelector";

import "./characters.css"
import "./map-stuff/map.css"
import "./form-stuff/form-parts/button/form-button.css"

import { useEffect, useState } from "react";
import { Player } from "../models/player";

export default function Characters() {
    const [characterId, setCharacterId] = useState<number>(0);

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await fetch("https://localhost:7151/apis/auth/me", {
                method: "GET",
                credentials: "include"
            });

            if (!response.ok) {
                throw new Error("Unauthorized");
            }

            const data = await response.json();

            const loadedPlayer = new Player(Number(data.playerId), data.email, data.email, "", Number(data.characterId));

            setCharacterId(Number(loadedPlayer.characterId));
            console.log(loadedPlayer.characterId);
            console.log(characterId);
        }

        fetchCharacter();
    }, [])

    if (!characterId) {
        return <div>Loading...</div>;
    }

    return (
        <div id="characters">
            <Header />
            <div id="selector-wrapper">
                <span className={`show-point character-${characterId}`}>
                </span>
                <div id="selector-btns">
                    <button id="previous-character" className="btn-classic">Previous</button>
                    <button id="select character" className="btn-classic">Select</button>
                    <button id="next-character" className="btn-classic">Next</button>
                </div>
            </div>
        </div>
    );
}
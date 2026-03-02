import Header from "./header-stuff/Header";
// import CharacterSelector from "./CharacterSelector";

import "./characters.css"
import "./map-stuff/map.css"
import "./form-stuff/form-parts/button/form-button.css"

import { useEffect, useState } from "react";
import { Player } from "../models/player";
import type { Character } from "../models/character";
import { updatePlayersCharacter } from "../apis/playerApi";

export default function Characters() {
    const [characterId, setCharacterId] = useState<number>(0);
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch("https://localhost:7151/apis/characters");

            const data = await response.json();
            setCharacters(data);
        }

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

        fetchCharacters();
        fetchCharacter();
    }, [])

    if (!characterId) {
        return <div>Loading...</div>;
    }

    const selectCharacter = async () => {
        console.log("aaa");



        await updatePlayersCharacter(characterId + 1);
    }

    const previousCharacter = () => {

    }

    const nextCharacter = () => {
        
    }

    return (
        <div id="characters">
            <Header />
            <div id="selector-wrapper">
                <span className={`show-point character-${characterId}`}>
                </span>
                <div id="selector-btns">
                    <button id="previous-character" className="btn-classic">Previous</button>
                    <button id="select character" className="btn-classic" onClick={selectCharacter}>Select</button>
                    <button id="next-character" className="btn-classic">Next</button>
                </div>
            </div>
        </div>
    );
}
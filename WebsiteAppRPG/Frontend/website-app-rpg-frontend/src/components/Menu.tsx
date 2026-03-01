import "./menu.css"
import "./form-stuff/form-parts/button/form-button.css"

import { useNavigate } from "react-router-dom";

import Header from "./header-stuff/Header.tsx"
// import MenuBody from "./MenuBody.tsx";

export default function Menu() {

    const navigateTo = useNavigate();

    const gameFunc = () => {
        navigateTo("/game");
    }

    const characterFunc= () => {
        navigateTo("/game/characters");
    };

    return (
        <div id="menu">
            <Header />
            <div className="wrapper">
                <button id="play" className="btn-classic" onClick={gameFunc}>Play</button>
                <button id="character-swap" className="btn-classic" onClick={characterFunc}>Character Picker</button>
            </div>  
        </div>
    );
}
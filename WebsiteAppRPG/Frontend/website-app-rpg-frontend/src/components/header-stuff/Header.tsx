import "./header.css"

import { useNavigate } from "react-router-dom";

import HeaderButton from "./HeaderButton.tsx"

export default function Header() {

    const navigateTo = useNavigate();

    const menuFunc = () => {
        navigateTo("/game/menu");
    }

    const levelMakerFunc = () => {
        navigateTo("/game/level_maker");
    }

    const optionsFunc = () => {
        navigateTo("/game/options");
    }

    const logOutFunc = () => {
        cookieStore.delete("Jwt");
        navigateTo("/login");
    }

    return (
        <header>
            <HeaderButton id="btn-menu" buttonType="classic" buttonText="Menu" onClickFunction={menuFunc} />
            <HeaderButton id="btn-level-maker" buttonType="classic" buttonText="Level Maker" onClickFunction={levelMakerFunc} />
            <HeaderButton id="btn-options" buttonType="classic" buttonText="Options" onClickFunction={optionsFunc} />
            <HeaderButton id="btn-log-out" buttonType="danger" buttonText="Log Out" onClickFunction={logOutFunc} />
        </header>
    );
}
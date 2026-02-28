import { useNavigate } from "react-router-dom";
import "../form-stuff/form.css"

import FormLabel from "./FormLabel";
import FormButton from "./FormButton";

import { Player } from "../../models/player";
import { fetchPlayers, createPlayer } from "../../apis/playerApi";

export default function Register() {
    const navigateTo = useNavigate();

    const handleRegister = async () => {
        const emailRegisterInput = document.querySelector<HTMLInputElement>("#email-register-input");
        const usernameRegisterInput = document.querySelector<HTMLInputElement>("#username-register-input");
        const passwordRegisterInput = document.querySelector<HTMLInputElement>("#password-register-input");

        const error = document.querySelector<HTMLInputElement>("#error");
        
        let data = await fetchPlayers();

        let emailAndUsernameIsUnique: boolean = true;

        if (emailRegisterInput != null && usernameRegisterInput !== null && error !== null && passwordRegisterInput !== null) {
            data.forEach((player) => {
                if (player.email === String(emailRegisterInput.value) || player.name === String(usernameRegisterInput.value)) {
                    emailAndUsernameIsUnique = false;
                }
            });

            if (String(emailRegisterInput.value).trim().length === 0 || String(usernameRegisterInput.value).trim().length === 0) {
                error.innerText = "Email or Username is not written!";
                return;
            }

            if (!emailAndUsernameIsUnique) {
                error.innerText = "Email or Username is already taken!";
                return;
            }

            if (String(passwordRegisterInput.value).trim().length === 0) {
                error.innerText = "Password is required for your own safety!";
                return;
            }

            const newPlayer: Player = await createPlayer(String(emailRegisterInput.value), String(usernameRegisterInput.value), String(passwordRegisterInput.value));
            navigateTo("/game", { state: newPlayer });
        }
    }

    const handleLogin = () => {
        navigateTo("/login");
    }

    return (
        <form action="" method="">
            <table>
                <thead>
                    <tr>
                        <th>
                            <h1 className="form-text">We are waiting 4 you</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <FormLabel labelTitle="Email" inputId="email-register-input" inputType="email" inputPlaceholder="johndoe@example.com" maxLength={undefined} />
                            
                    <FormLabel labelTitle="Username" inputId="username-register-input" inputType="text" inputPlaceholder="CrazyJoe22" maxLength={50} />

                    <FormLabel labelTitle="Password" inputId="password-register-input" inputType="password" inputPlaceholder="123456Ab" maxLength={undefined} />

                    <tr>
                        <td>
                            <div id="error"></div>
                        </td>
                    </tr>

                    <FormButton buttonText="Register" btnFunction={handleRegister} />

                    <tr>
                        <td>
                            <div>already have an account? <a onClick={handleLogin}>Login!</a></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    
    );
}
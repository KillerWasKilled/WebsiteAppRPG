import { fetchPlayers } from "../../apis/playerApi";

import { useNavigate } from "react-router-dom";
import "../form-stuff/form.css"


export default function Login() {

    const navigateTo = useNavigate();

    const handleLogin = async () => {
        const emailLoginInput = document.querySelector<HTMLInputElement>("#email-login-input");
        const passwordLoginInput = document.querySelector<HTMLInputElement>("#password-login-input");

        const error = document.querySelector<HTMLElement>("#error");

        let playerExists: boolean = false;
        let playerExistsIndex: number = 0;
        const response = await fetchPlayers();

        if (emailLoginInput !== null && passwordLoginInput !== null && error !== null) {
            response.forEach((p, index) => {
                if (p.email === String(emailLoginInput.value)) {
                    playerExists = true;
                    playerExistsIndex = index;
                }
            });

            if (!playerExists) {
                error.innerText = "Player does not exist!";
            }
                
            else
            {
                const player = response[playerExistsIndex];

                if (player.password === String(passwordLoginInput.value)) {
                    error.innerText = "";
                    navigateTo("/game", { state: player });   
                }

                else {
                    error.innerText = "Password is either incorrect or wrong!";
                }               
            }
        }
    }

    // PAST
    const handleRegister = () => {
        navigateTo("/register");
    };

    return (
        <form action="" method="">
            <table>
                <thead>
                    <tr>
                        <th>
                            <h1 className="form-text">WebsiteAppRPG</h1>
                        </th>
                    </tr>

                    <tr>
                        <th>
                            <h3 className="form-text">Login to play 🤪</h3>
                        </th>
                    </tr>

                </thead>
                
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="">
                                <strong className="form-text">Email: </strong>
                                <input id="email-login-input" type="email" placeholder="john_doe@example.com" />
                            </label>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor="">
                                <strong className="form-text">Password: </strong>
                                <input id="password-login-input" type="password" placeholder="123456Ab" />
                            </label>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div id="error"></div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button className="const-style" type="button" onClick={handleLogin}>Login</button>
                        </td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <td>
                            <div className="form-text">Don't have an account yet? <a onClick={handleRegister}>Register Here</a></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </form>
    );
}
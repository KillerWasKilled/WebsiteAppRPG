import { useNavigate } from "react-router-dom";
import "../form-stuff/form.css"
import { login } from "../../apis/authApi";
import { useState } from "react";
import FormLabel from "./FormLabel";


export default function Login() {

    const navigateTo = useNavigate();
    
    /*const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");*/
    const [error, setError] = useState("");

    const handleLogin = async () => {
        const emailLoginInput = document.querySelector<HTMLInputElement>("#email-login-input");
        const passwordLoginInput = document.querySelector<HTMLInputElement>("#password-login-input");
        const error = document.querySelector<HTMLElement>("#error");
        
        try {
            console.log(emailLoginInput!.value, passwordLoginInput!.value)
            const response = await login(emailLoginInput!.value, passwordLoginInput!.value);

            if (!response.token) {
                error!.innerText = "Chyba!";
                return;
            }

            console.log(response.token);
            error!.innerText = "";
            navigateTo("/game");
        } 
        
        catch {
            console.log("error");
            setError("Chyba!");
        }

    }

    // PAST
    const handleRegister = () => {
        navigateTo("/register");
    };

    return (
        <div>
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
                    <FormLabel labelTitle="Email" inputId="email-login-input" inputType="email" inputPlaceholder="johndoe@example.com" maxLength={undefined} />

                    <FormLabel labelTitle="Password" inputId="password-login-input" inputType="password" inputPlaceholder="123456Ab" maxLength={undefined} />

                    <tr>
                        <td>
                            <div id="error">{error}</div>
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
        </div>
    );
}
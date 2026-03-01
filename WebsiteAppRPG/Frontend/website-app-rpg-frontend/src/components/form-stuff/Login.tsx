import { useNavigate } from "react-router-dom";
import { login } from "../../apis/authApi";

import "./form.css"
import FormHeader from "./form-parts/header/FormHeader";
import FormSubheader from "./form-parts/header/FormSubheader";
import FormButton from "./form-parts/button/FormButton";
import FormLabel from "./form-parts/label/FormLabel";


export default function Login() {

    const navigateTo = useNavigate();
    let error = "";

    const handleLogin = async () => {
        const emailLoginInput = document.querySelector<HTMLInputElement>("#email-login-input");
        const passwordLoginInput = document.querySelector<HTMLInputElement>("#password-login-input");
        
        try {
            console.log(emailLoginInput!.value, passwordLoginInput!.value)
            const response = await login(emailLoginInput!.value, passwordLoginInput!.value);

            if (!response.token) {
                error = "Problem!";
                return;
            }

            console.log(response.token);
            error = "";
            navigateTo("/game/menu");
        } 
        
        catch {
            console.log("error");
            error = "Problem!";
        }

    }

    // PAST
    const handleRegister = () => {
        navigateTo("/register");
    };

    return (
        <div className="login">
            <table>
                <thead>
                    <FormHeader text="WebsiteAppRPG" />

                    <FormSubheader text="Login to play 🤪" />
                </thead>
                
                <tbody>
                    <FormLabel labelTitle="Email" inputId="email-login-input" inputType="email" inputPlaceholder="johndoe@example.com" maxLength={undefined} />

                    <FormLabel labelTitle="Password" inputId="password-login-input" inputType="password" inputPlaceholder="123456Ab" maxLength={undefined} />

                    <tr>
                        <td>
                            <div id="error"></div>
                        </td>
                    </tr>

                    <FormButton buttonText="Login" btnFunction={handleLogin} />
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
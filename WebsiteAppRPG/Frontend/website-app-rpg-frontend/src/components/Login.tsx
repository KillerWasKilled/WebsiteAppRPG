import { useNavigate } from "react-router-dom";
import "../components/form.css"


export default function Login() {

    const navigateTo = useNavigate();

    const handleGame = () => {
        navigateTo("/game");
    };

    const handleRegister = () => {
        navigateTo("/register");
    };

    return (
        <form action="" method="">
            <table>
                <thead>
                    <tr>
                        <th>
                            <h1>We are waiting 4 you</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="">
                                <div>Email: </div>
                                <input type="email" placeholder="john_doe@example.com" />
                            </label>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor="">
                                <div>Password: </div>
                                <input type="password" placeholder="123456Ab" />
                            </label>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button type="button" onClick={handleGame}>Login</button>
                        </td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <td>
                            <div>Don't have an account yet? <strong onClick={handleRegister}>Register Here</strong></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </form>
    );
}
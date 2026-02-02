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
                            <h1 className="form-text">We are waiting 4 you</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="">
                                <div className="form-text">Email: </div>
                                <input type="email" placeholder="john_doe@example.com" />
                            </label>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor="">
                                <div className="form-text">Password: </div>
                                <input type="password" placeholder="123456Ab" />
                            </label>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button className="const-style" type="button" onClick={handleGame}>Login</button>
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
import { useNavigate } from "react-router-dom";
import "../components/form.css"

export default function Register() {
    const navigateTo = useNavigate();

    const handleGame = () => {
        navigateTo("/game");
    }

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
                                <div>Username: </div>
                                <input type="text" placeholder="johnDoe123" maxLength={50} />
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
                            <button type="button" onClick={handleGame}>Register</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    
    );
}
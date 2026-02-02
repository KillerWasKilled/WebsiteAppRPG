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
                                <div className="form-text">Username: </div>
                                <input type="text" placeholder="johnDoe123" maxLength={50} />
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
                            <button className="const-style" type="button" onClick={handleGame}>Register</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    
    );
}
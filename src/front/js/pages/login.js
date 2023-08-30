import React, { useContext, useState } from "react"; // Removed 'useCallback' import since it's not used in the provided code
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        actions.Login()
    };

    return (
        <div className="text-center mt-5">
            <h1>Login</h1>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)} // Added 'e' parameter to the onChange handlers
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} // Added 'e' parameter to the onChange handlers
                />
                <button onClick={handleClick}>login</button>
            </div>
        </div>
    );
};

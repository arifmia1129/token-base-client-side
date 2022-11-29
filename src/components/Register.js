import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const handleProfile = async () => {
            try {
                const res = await axios.get("http://localhost:5000/profile", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                if (res.status === 200) {
                    navigate("/profile")
                }

            } catch (error) {
                navigate("/register")
            }
        }
        handleProfile()
    }, [navigate])

    const handleRegister = async () => {
        const res = await axios.post("http://localhost:5000/api/user/register", { username, password })
        if (res.data.success) {
            navigate("/login");
        }
    }
    return (
        <div>
            <h3>Register Account</h3>

            <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} /> <br />

            <input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} /> <br />

            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
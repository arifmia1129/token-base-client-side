import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("");

    useEffect(() => {
        const handleProfile = async () => {
            try {
                const res = await axios.get("http://localhost:5000/profile", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                if (res.status === 200) {
                    setUsername(res.data.username)
                }

            } catch (error) {
                navigate("/login")
            }
        }
        handleProfile()
    }, [navigate])
    return (
        <div>
            <h1>Welcome {username}</h1>
        </div>
    );
};

export default Profile;
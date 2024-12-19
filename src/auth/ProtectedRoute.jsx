import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const checkUserStatus = async (email) => {
        const response = await fetch(`http://localhost:5001/users?email=${email}`, { method: "GET" });
        if (response.ok) {
            const user = await response.json();
            if (user.length > 0) {
                setIsLoggedIn(true);
            } else {
                navigate("/");
            }
        } else {
            alert("Something went wrong")
        }
    }

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("todouser"));
        if (local) {
            checkUserStatus(local.email);
        } else {
            navigate("/");
        }
    }, [])



    return (
        isLoggedIn ?
            children :
            <div className="h-full d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
    )
}

export default ProtectedRoute
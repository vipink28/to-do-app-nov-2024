import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // useNavigate hook is used to add redirection to a page in a function
    const navigate = useNavigate();


    //register user
    const handleRegister = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const checkUserResponse = await fetch(`http://localhost:5001/users?email=${formData.email}`, { method: "GET" });
        if (checkUserResponse.ok) {
            const user = await checkUserResponse.json();
            if (user.length > 0) {
                alert("User already exist");
            } else {
                const response = await fetch('http://localhost:5001/users', config);
                if (response.status === 201) {
                    const user = await response.json();
                    localStorage.setItem("todouser", JSON.stringify(user))
                    setUser(user);
                    alert("User registered successfully");
                    navigate("/task-list")
                } else {
                    alert("Something went wrong, please try again");
                }
            }
        } else {
            alert("something went wrong");
        }
    }


    // login user
    const handleLogin = async (formData) => {
        const response = await fetch(`http://localhost:5001/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        if (response.ok) {
            const users = await response.json();
            if (users.length > 0) {
                localStorage.setItem("todouser", JSON.stringify(users[0]))
                setUser(users[0])
                alert("User found");
                navigate("/task-list")
            } else {
                alert("Email/password is incorrect");
            }
        } else {
            alert("Something went wrong, please try again");
        }
    }


    //logout
    const logout = () => {
        setUser(null);
        localStorage.removeItem("todouser");
        navigate("/login");
    }

    const checkUserStatus = async (email) => {
        const response = await fetch(`http://localhost:5001/users?email=${email}`, { method: "GET" });
        if (response.ok) {
            const user = await response.json();
            if (user.length > 0) {
                setUser(user[0]);
            } else {
                localStorage.removeItem("todouser");
            }
        } else {
            alert("Something went wrong")
        }
    }


    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("todouser"));
        if (local) {
            checkUserStatus(local.email);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            handleLogin,
            handleRegister,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
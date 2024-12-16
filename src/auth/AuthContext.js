import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


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
            } else {
                alert("Email/password is incorrect");
            }
        } else {
            alert("Something went wrong, please try again");
        }
    }




    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("todouser"));
        if (local) {
            setUser(local);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            handleLogin,
            handleRegister
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
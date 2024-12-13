import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        const response = await fetch(`http://localhost:5001/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        if (response.ok) {
            const users = await response.json();
            if (users.length > 0) {
                localStorage.setItem("todouser", JSON.stringify(users[0]))
                alert("User found");
            } else {
                alert("Email/password is incorrect");
            }
        } else {
            alert("Something went wrong, please try again");
        }
    }

    return (
        <div className='py-2'>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type='email' className='form-control' name='email' onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control' name='password' onChange={handleChange} />
            </div>
            <button onClick={handleSubmit} className='btn btn-primary'>Login</button>
        </div>
    )
}

export default Login
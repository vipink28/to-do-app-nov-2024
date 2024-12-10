import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        // fetch();
        const response = await fetch('http://localhost:5001/users', config);
        if (response.status === 201) {
            alert("User registered successfully");
        } else {
            alert("Something went wrong, please try again");
        }
    }

    return (
        <div className='py-2'>
            <div className='mb-3'>
                <label className='form-label'>User Name</label>
                <input type='text' className='form-control' name='username' onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type='email' className='form-control' name='email' onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control' name='password' onChange={handleChange} />
            </div>
            <button onClick={handleSubmit} className='btn btn-primary'>Register</button>
        </div>
    )
}

export default Register
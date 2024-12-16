import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';

const Login = () => {
    const { handleLogin } = useContext(AuthContext);
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        handleLogin(formData);
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
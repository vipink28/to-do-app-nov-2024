import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';

const Register = () => {
    const { handleRegister } = useContext(AuthContext);
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        handleRegister(formData);
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
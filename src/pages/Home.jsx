import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import illustration from '../assets/illustration.png';

const Home = () => {
    return (
        <div className='container-fluid wrapper'>
            <div className='row h-100'>
                <div className='h-100 col-lg-6 d-flex bg-primary justify-content-center align-items-center text-white flex-column'>

                    <h1 className='text-center display-5 text-uppercase'>
                        An App to <br />
                        make your life <br />
                        <span className='display-2'>Organised</span>
                    </h1>

                    <img className='img-fluid' src={illustration} alt='illustration' />

                </div>

                <div className='h-100 col-lg-6 d-flex justify-content-center align-items-center flex-column'>
                    <div className='card w-50 rounded-0'>
                        <div className='card-header p-0 bg-transparent rounded-0 border-0 d-flex'>
                            <Link to="/login" className='p-2 w-50 d-flex justify-content-center align-items-center bg-white text-primary text-decoration-none'>Login</Link>

                            <Link to="/register" className='p-2 w-50 d-flex justify-content-center align-items-center bg-primary text-white text-decoration-none'>Register</Link>
                        </div>
                        <div className='card-body'>
                            <Outlet />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
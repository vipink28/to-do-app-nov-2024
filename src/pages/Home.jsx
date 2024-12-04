import React from 'react';
import illustration from '../assets/illustration.png';

const Home = () => {
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='h-100 col-lg-6 d-flex bg-primary justify-content-center align-items-center text-white flex-column'>

                    <h1 className='text-center display-5 text-uppercase'>
                        An App to <br />
                        make your life <br />
                        <span className='display-2'>Organised</span>
                    </h1>

                    <img src={illustration} alt='illustration' />

                </div>

                <div className='h-100 col-lg-6 d-flex justify-content-center align-items-center flex-column'>

                </div>

            </div>
        </div>
    )
}

export default Home
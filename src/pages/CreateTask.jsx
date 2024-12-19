import React from 'react'
import TaskForm from '../components/TaskForm'

const CreateTask = () => {
    return (
        <div className='container-fluid wrapper'>
            <div className='row h-100'>
                <div className='h-100 col-lg-6 d-flex bg-primary justify-content-center align-items-center text-white flex-column'>
                    <div className='w-50'>
                        <TaskForm />
                    </div>
                </div>

                <div className='h-100 col-lg-6 d-flex justify-content-center align-items-center flex-column'>
                    <div className='card w-50 rounded-0'>

                        <div className='card-body'>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateTask
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';
import { formatDate } from '../helper';

const CreateTask = () => {
    const { latestTask, recentTasks } = useContext(TaskContext);
    const [isUpdate, setIsUpdate] = useState(false);

    const edit = () => {
        setIsUpdate(true);
    }

    return (
        <div className='container-fluid wrapper'>
            <div className='row h-100'>
                <div className='h-100 col-lg-6 d-flex bg-primary justify-content-center align-items-center text-white flex-column'>
                    <div className='w-50'>
                        <TaskForm isUpdate={isUpdate} data={latestTask} setIsUpdate={setIsUpdate} />
                    </div>
                </div>

                <div className='h-100 col-lg-6 d-flex justify-content-center align-items-center flex-column'>

                    <div className='card w-75 rounded-0 bg-primary text-white mb-4'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center'>
                                <h3>Latest Task</h3>
                                <button onClick={edit} className='btn btn-info ms-auto'>Edit Task</button>
                            </div>

                            <h4>{latestTask?.title}</h4>
                            <p>{latestTask?.description}</p>

                            <div className='d-flex align-items-center'>
                                <p>Modified On: {formatDate(latestTask?.modifiedon)}</p>
                                <p className='ms-auto'>Due On: {formatDate(latestTask?.duedate)}</p>
                            </div>

                        </div>
                    </div>



                    <div className='card bg-primary w-75 rounded-0'>
                        <div className='card-body'>
                            <h3 className='text-white mb-4'>Recent Tasks</h3>

                            <div className='mb-3'>
                                {
                                    recentTasks ?
                                        recentTasks.map((item) => (
                                            <div key={item.id} className='d-flex align-items-center border-1 border-warning text-white'>
                                                <p>{item.title}</p>
                                                <p className='ms-auto'>{formatDate(item.duedate)}</p>
                                            </div>
                                        ))
                                        : <p>No tasks to show</p>
                                }
                            </div>

                            <Link to="/task-list" className='text-info p-2'>View All</Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateTask
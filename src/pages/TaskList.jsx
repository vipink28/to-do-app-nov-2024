import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../components/Popup';
import TaskContext from '../context/TaskContext';

const TaskList = () => {
    const { allTasks } = useContext(TaskContext);
    const [filteredTasks, setFilteredTasks] = useState(null);

    useEffect(() => {
        if (allTasks) {
            setFilteredTasks(allTasks);
        }
    }, [allTasks])

    const handleSearch = (e) => {
        let { value } = e.target;
        const filteredArr = allTasks.filter((item) => (
            item.title.toLowerCase().includes(value.toLowerCase())
        ))
        setFilteredTasks(filteredArr);
    }

    return (
        <div className='container'>
            <div className='bg-primary p-4'>
                <div className='mb-3 d-flex'>
                    <h3 className='text-white'>Task List</h3>
                    <Link to="/create-task" className='btn btn-info ms-auto'>Create Task</Link>
                </div>

                <div className='mb-4'>
                    <input type='text' className='form-control' placeholder='search task' onChange={handleSearch} />
                </div>

                <div className='d-flex flex-column gap-3 text-white'>
                    {/* header */}
                    <div className='row'>
                        <div className='col-lg-1'>Sr. No.</div>
                        <div className='col-lg-3'>Title</div>
                        <div className='col-lg-4'>Description</div>
                        <div className='col-lg-2'>Due Date</div>
                        <div className='col-lg-2'>Actions</div>
                    </div>

                    {/* List */}

                    {
                        filteredTasks ?
                            filteredTasks.map((item) => (
                                <div key={item.id} className='row rounded-2 bg-dark px-2 py-3'>
                                    <div className='col-lg-1'>{item.id}</div>
                                    <div className='col-lg-3'>{item.title}</div>
                                    <div className='col-lg-4'>{item.description}</div>
                                    <div className='col-lg-2'>{item.duedate}</div>
                                    <div className='col-lg-2'>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup">
                                            <FontAwesomeIcon icon={faEye} />
                                        </span>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </span>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                    </div>
                                </div>
                            ))
                            : <p>No Data</p>
                    }

                </div>

            </div>
            <Popup />
        </div>
    )
}

export default TaskList
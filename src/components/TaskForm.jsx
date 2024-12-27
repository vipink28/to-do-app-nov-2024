import { useContext, useEffect, useState } from "react";
import AuthContext from '../auth/AuthContext';
import TaskContext from "../context/TaskContext";

const TaskForm = (props) => {
    const init = {
        title: "",
        description: "",
        duedate: ""
    }
    const { addTask, updateTask } = useContext(TaskContext);
    const { user } = useContext(AuthContext);
    const { isUpdate, data, setIsUpdate } = props;

    const [formData, setFormData] = useState(init);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            userid: user.id,
            modifiedon: Date()
        }))
    }

    useEffect(() => {
        if (isUpdate && data) {
            setFormData(data);
        }
    }, [isUpdate, data])

    const handleTask = () => {
        addTask(formData);
    }

    const handleCancel = () => {
        setIsUpdate(false);
        setFormData(init);
    }
    const handleUpdate = () => {
        updateTask(formData);
    }

    return (
        <div className="p-2">
            <h1 className="text-white mb-3">{isUpdate ? "Update Task" : "Create Task"}</h1>
            <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" name="title" className="form-control" onChange={handleChange} value={formData.title} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea rows="5" name="description" className="form-control" value={formData.description} onChange={handleChange} ></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Due Date</label>
                        <input type="datetime-local" name="duedate" className="form-control" value={formData.duedate} onChange={handleChange} />
                    </div>

                    {
                        isUpdate ?
                            <>
                                <button onClick={handleUpdate} className="btn btn-primary">Update Task</button>
                                <button onClick={handleCancel} className="btn btn-warning ms-2">Cancel</button>
                            </>
                            :
                            <button onClick={handleTask} className="btn btn-primary">Add Task</button>
                    }

                </div>
            </div>
        </div>
    )
}

export default TaskForm
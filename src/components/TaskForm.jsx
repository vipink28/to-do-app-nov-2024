import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const handleTask = () => {
        addTask(formData);
    }

    return (
        <div className="p-2">
            <h1 className="text-white mb-3">Create Task</h1>

            <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" name="title" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea rows="5" name="description" className="form-control" onChange={handleChange} ></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Due Date</label>
                        <input type="datetime-local" name="duedate" className="form-control" onChange={handleChange} />
                    </div>

                    <button onClick={handleTask} className="btn btn-primary">Add Task</button>

                </div>
            </div>
        </div>
    )
}

export default TaskForm
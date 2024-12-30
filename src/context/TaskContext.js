import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [allTasks, setAllTasks] = useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const [latestTask, setLatestTask] = useState(null);

    //add Task
    const addTask = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        try {
            const response = await fetch(`http://localhost:5001/tasks`, config)
            if (response.status === 201) {
                alert("Task added successfully");
                getAllTasks(user.id);
            } else {
                alert("Somthing went wrong")
            }
        } catch (error) {
            console.log(error);
        }
    }

    //get all tasks

    const getAllTasks = async (id) => {
        try {
            const response = await fetch(`http://localhost:5001/tasks?userid=${id}`, { method: "GET" });
            if (response.ok) {
                const tasks = await response.json();
                setAllTasks(tasks);
                setRecentTasks(tasks.slice(-3));
                setLatestTask(tasks[tasks.length - 1]);
            } else {
                alert("something went wrong");
            }

        } catch (error) {
            console.log(error);
        }
    }


    // update task

    const updateTask = async (formData) => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        try {
            const response = await fetch(`http://localhost:5001/tasks/${formData.id}`, config);
            if (response.ok) {
                alert("Task updated successfully")
                getAllTasks(user.id);
            } else {
                alert("Something went wrong");
            }
        } catch (error) {

        }
    }


    //delete task
    const deleteTask = async (id) => {
        const config = {
            method: "DELETE"
        }

        try {
            const response = await fetch(`http://localhost:5001/tasks/${id}`, config);
            if (response.ok) {
                alert("Task deleted successfully");
                getAllTasks(user.id);
            } else {
                alert("Something went wrong");
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        if (user) {
            getAllTasks(user.id);
        }
    }, [user])

    return (
        <TaskContext.Provider value={{
            addTask,
            latestTask,
            recentTasks,
            allTasks,
            updateTask,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;
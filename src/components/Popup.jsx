import { useRef, useContext } from "react";
import { formatDate } from "../helper";
import TaskForm from "./TaskForm";
import TaskContext from "../context/TaskContext";

const Popup = ({ task }) => {
    const { deleteTask } = useContext(TaskContext);
    const { type, data } = task;
    const closeBtn = useRef(null);

    // console.log(closeBtn.current);

    return (
        <div className="modal" tabIndex="-1" id="task-popup">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button ref={closeBtn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            type === "view" ?
                                <div>
                                    <h4>{data?.title}</h4>
                                    <p>{data?.description}</p>

                                    <div className='d-flex align-items-center'>
                                        <p>Modified On: {formatDate(data?.modifiedon)}</p>
                                        <p className='ms-auto'>Due On: {formatDate(data?.duedate)}</p>
                                    </div>
                                </div>
                                : type === "edit" ?
                                    <div>
                                        <TaskForm isUpdate={true} data={data} closeBtn={closeBtn} isPopup={true} />
                                    </div>
                                    :
                                    <div className="py-2">
                                        <p>Do you really want to delete this task?</p>
                                        <div className="d-flex justify-content-end">
                                            <button onClick={() => { deleteTask(data.id) }} className="btn btn-danger">Yes</button>
                                            <button className="btn btn-warning ms-2" data-bs-dismiss="modal">No</button>
                                        </div>
                                    </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
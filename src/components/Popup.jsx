import { formatDate } from "../helper";
import TaskForm from "./TaskForm";

const Popup = ({ task }) => {
    const { type, data } = task;
    return (
        <div className="modal" tabIndex="-1" id="task-popup">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                        <TaskForm isUpdate={true} data={data} />
                                    </div>
                                    :
                                    <div>
                                        Delete
                                    </div>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
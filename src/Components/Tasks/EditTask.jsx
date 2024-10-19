import React, { useState } from 'react';
import DeleteTask from './DeleteTask';

export default function EditTask({ index, task, tasks, setTasks }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task);

    let editBtnStyle = "bg-yellow-400 hover:bg-yellow-200 transition w-4 h-4 p-4 flex items-center justify-center rounded-full";
    let saveBtnStyle = "bg-green-400 hover:bg-green-200 transition w-4 h-4 p-4 flex items-center justify-center rounded-full";
    let editInputFieldStyle = "rounded border-none outline-none py-1 px-2 w-4/6 sm:w-5/6 xl:w-11/12";
    let taskStyle = `truncate`;
    let btnContainerStyle = 'flex justify-center items-center gap-2';

    const handleSave = () => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = newTask; 
        setTasks(updatedTasks); 
        setIsEditing(false); 
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    return (
        <>
            {isEditing ? (
                <input
                    className={editInputFieldStyle}
                    type="text"
                    value={newTask} 
                    onChange={handleChange} 
                />
            ) : (
                <p className={taskStyle}>{task}</p>
            )}
            <div className={btnContainerStyle}>
                {isEditing ? (
                    <button 
                        onClick={handleSave} 
                        className={saveBtnStyle}
                    >✓
                    </button>
                ) : (
                    <button 
                        onClick={handleEditClick} 
                        className={editBtnStyle}
                    >Edit
                    </button>
                )}
                <DeleteTask 
                    index={index}
                    tasks={tasks}
                    setTasks={setTasks}
                />
            </div>
        </>
    );
}

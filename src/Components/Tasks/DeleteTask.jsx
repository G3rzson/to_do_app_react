
import React from 'react'

export default function DeleteTask( { index, tasks, setTasks } ) {

    function deleteTask(index){
        const updatedTask = tasks.filter( (_, i)=> i !== index );
        setTasks(updatedTask);
    }

    let deleteBtnStyle = "bg-red-400 hover:bg-red-200 transition w-4 h-4 p-4 flex items-center justify-center rounded-full"

    return (
        <button 
            onClick={() => deleteTask(index)}
            className={deleteBtnStyle}
        >X
        </button>
    )
}





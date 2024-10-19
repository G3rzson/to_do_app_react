
import {useState} from 'react'
import Tasks from '../Tasks/Tasks';

export default function ToDoForm() {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newTask.trim() === ''){
            return;
        } else {
            setTasks([newTask, ...tasks]);  
        }
        setNewTask('');
    };

    let formStyle = 'flex items-center justify-center w-96 sm:w-4/5 mx-auto gap-3 mb-4';
    let inputStyle = 'w-3/4 sm:w-4/5 p-2 border-none outline-none rounded block text-3xl';
    let submitBtnStyle = 'bg-lime-400 hover:bg-lime-200 transition flex items-center justify-center rounded text-3xl p-2'
    let textStyle = 'text-center m-4 text-2xl sm:text-3xl xl:text-4xl text-lime-500 italic'
  return (
    <>
        <form className={formStyle}>
            <input 
                type="text" 
                className={inputStyle}
                onChange={handleChange}
                value={newTask}
            />
            <button 
                type='submit' 
                onClick={handleSubmit}
                className={submitBtnStyle}
                >Add
            </button>
        </form>
        {tasks.length === 0 
            ? <p className={textStyle}>Adj hozzá feladatokat 😁</p>
            : <Tasks tasks={tasks} setTasks={setTasks}/>
        }
    </>
  )
}

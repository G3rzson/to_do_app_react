
import EditTask from './EditTask';
import { v4 as uuidv4 } from 'uuid';

export default function Tasks({ tasks, setTasks }) {

    let taskContainerStyle = 'flex justify-between items-center bg-slate-400 m-2 p-2 rounded w-4/5 mx-auto';

    let task = tasks.map((task, index) => {
        return (
            <div key={uuidv4()} className={taskContainerStyle}>
                <EditTask 
                    index={index}
                    tasks={tasks}
                    setTasks={setTasks}
                    task={task}
                />
            </div>
        );
    });

    return (
        <>{task}</>
    );
}

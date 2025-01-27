import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl text-center font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button
        className="bg-red-900 px-2 py-1 rounded-md mt-3 hover:bg-red-600"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;

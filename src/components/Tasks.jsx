import { ChevronRightIcon, Trash2 } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick, seeDetailsClick }) {
  return (
    <div>
      <ul className="flex min-h-[250px] flex-col justify-center space-y-4 rounded-lg bg-slate-400 p-4 shadow">
        {tasks.map((task) => (
          <li className="flex gap-2" key={task.id}>
            <button
              onClick={() => {
                onTaskClick(task.id);
              }}
              className={`w-full rounded-md bg-slate-300 p-2 text-left font-semibold text-black opacity-90 ${task.isCompleted && "text-opacity-20 line-through"}`}
            >
              {task.title}
            </button>
            <button
              className={`rounded-md bg-slate-300 p-2 font-semibold text-gray-700 ${task.isCompleted && "text-opacity-20"}`}
              disabled={task.isCompleted}
              onClick={() => seeDetailsClick(task)}
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => {
                onDeleteTaskClick(task.id);
              }}
              className={`rounded-md bg-slate-300 p-2 font-semibold text-gray-700 hover:bg-red-300 hover:text-red-600`}
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;

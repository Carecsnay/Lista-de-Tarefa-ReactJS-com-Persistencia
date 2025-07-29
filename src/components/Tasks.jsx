import { ChevronRightIcon, Trash2 } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  return (
    <div>
      <ul className="flex min-h-[250px] flex-col justify-center space-y-4 rounded-lg bg-slate-400 p-4 shadow">
        {tasks.map((tasks) => (
          <li className="flex gap-2" key={tasks.id}>
            <button
              onClick={() => {
                onTaskClick(tasks.id);
              }}
              className={`w-full rounded-md bg-slate-300 p-2 font-semibold text-gray-800 ${tasks.isCompleted && "text-gray-400 line-through"}`}
            >
              {tasks.title}
            </button>
            <button className="rounded-md bg-slate-300 p-2 font-semibold text-gray-700">
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => {
                onDeleteTaskClick(tasks.id);
              }}
              className="rounded-md bg-slate-300 p-2 font-semibold text-gray-700"
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

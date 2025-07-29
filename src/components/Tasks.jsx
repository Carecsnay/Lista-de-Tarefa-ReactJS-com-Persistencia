import { ChevronRightIcon, Trash2 } from "lucide-react";

function Tasks(props) {
  return (
    <div>
      <ul className="space-y-4 rounded-lg bg-slate-400 p-4 shadow">
        {props.tasks.map((tasks) => (
          <li className="flex gap-2" key={tasks.id}>
            <button className="w-full rounded-md bg-slate-300 p-2 font-semibold text-gray-700">
              {tasks.title}
            </button>
            <button className="rounded-md bg-slate-300 p-2 font-semibold text-gray-700">
              <ChevronRightIcon />
            </button>
            <button className="rounded-md bg-slate-300 p-2 font-semibold text-gray-700">
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;

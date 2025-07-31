import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-slate-500 p-6">
      <div className="space-y-4 rounded-md bg-slate-400 p-4">
        <p className="w-[500px] rounded-md bg-slate-300 p-2 text-center font-semibold uppercase text-gray-700">
          {title}
        </p>
        <p className="min-h-52 w-[500px] rounded-md bg-slate-300 p-2 text-justify font-semibold text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TaskPage;

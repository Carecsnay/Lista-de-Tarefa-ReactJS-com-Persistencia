import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "28 de julho de 2025 às 10:00",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Fazer compras",
      description: "29 de julho de 2025 às 14:30",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Reunião com o time",
      description: "30 de julho de 2025 às 09:00",
      isCompleted: true,
    },
    {
      id: 4,
      title: "Ir à academia",
      description: "31 de julho de 2025 às 18:00",
      isCompleted: false,
    },
  ]);

  function onTaskClick(TaskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === TaskId)
        return {
          ...tasks,
          isCompleted: !task.isCompleted,
        };
      else {
        return task;
      }
    });
    setTasks(newTasks);
  }
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-400 p-6">
      <div className="w-[500px] rounded-xl bg-slate-500 px-6 py-12">
        <h1 className="pb-4 text-center text-3xl font-bold text-black">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}
export default App;

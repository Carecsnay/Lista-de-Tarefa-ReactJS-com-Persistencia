import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 } from "uuid";

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

  function addTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(TaskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === TaskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(TaskId) {
    const newTasks = tasks.filter((task) => task.id !== TaskId);
    setTasks(newTasks);
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-400 p-6">
      <div className="min-w-[500px] space-y-4 rounded-xl bg-slate-500 px-6 py-12">
        <h1 className="pb-3 text-center text-3xl font-bold text-black opacity-90">
          Gerenciador de Tarefas
        </h1>
        <AddTask addTaskSubmit={addTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
export default App;

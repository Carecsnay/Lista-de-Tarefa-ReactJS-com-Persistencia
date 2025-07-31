import { useState } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([
    // {
    //   id: v4(),
    //   title: "Estudar React",
    //   description: "Antes do mega hiper super evento FSC acontecer!",
    //   isCompleted: true,
    // },
    // {
    //   id: v4(),
    //   title: "Fazer compras",
    //   description:
    //     "Comprar itens essenciais no supermercado às 14:30 do dia 29/07/2025",
    //   isCompleted: false,
    // },
    // {
    //   id: v4(),
    //   title: "Reunião com o time",
    //   description: "Participar do clube da leitura no dia 31/07/2025",
    //   isCompleted: true,
    // },
    // {
    //   id: v4(),
    //   title: "Praticar exercícios ",
    //   description: "Todos os dias, pelo menos 1h",
    //   isCompleted: false,
    // },
  ]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
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

  function seeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-400 p-6">
      <div className="min-w-[500px] space-y-4 rounded-xl bg-slate-500 px-6 py-12">
        <h1 className="pb-3 text-center text-3xl font-bold text-black opacity-60">
          Gerenciador de Tarefas
        </h1>
        <AddTask addTaskSubmit={addTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
          seeDetailsClick={seeDetailsClick}
        />
      </div>
    </div>
  );
}
export default App;

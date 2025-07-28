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
    return (
        <div className="w-screen h-screen bg-slate-400 flex items-center justify-center flex-col p-6">
            <div className="w-[500px] bg-slate-500 py-12 px-6 rounded-xl">
                <h1 className="text-3xl text-black font-bold text-center pb-4">Gerenciador de Tarefas</h1>
                <Tasks tasks={tasks} />
            </div>
        </div>
    );
}
export default App;

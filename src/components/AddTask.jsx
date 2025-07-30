import { useState } from "react";

function AddTask({ addTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col justify-center space-y-4 rounded-lg bg-slate-400 p-4 shadow">
      <input
        type="text"
        placeholder="Título da tarefa"
        className="rounded-md bg-slate-300 p-2 font-semibold text-gray-700 placeholder-gray-500 outline-gray-400"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <textarea
        type="text"
        placeholder="Descrição da tarefa"
        className="h-24 resize-none rounded-md bg-slate-300 p-2 font-semibold text-gray-700 placeholder-gray-500 outline-gray-400"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Campo Título ou Descrição em branco!");
          }
          addTaskSubmit(title, description);
        }}
        className="rounded-md bg-slate-500 p-2 font-semibold uppercase text-black opacity-90 hover:bg-black hover:text-white"
      >
        Adicionar tarefa
      </button>
    </div>
  );
}

export default AddTask;

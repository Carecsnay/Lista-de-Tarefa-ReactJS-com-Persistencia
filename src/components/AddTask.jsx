function AddTask() {
  return (
    <div className="flex flex-col justify-center space-y-4 rounded-lg bg-slate-400 p-4 shadow">
      <input
        type="text"
        name=""
        id=""
        placeholder="Título da tarefa"
        className="placeholder-slate-30 rounded-md bg-slate-300 p-2 placeholder-gray-500 outline-gray-400"
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Descrição da tarefa"
        className="placeholder-slate-30 rounded-md bg-slate-300 p-2 placeholder-gray-500 outline-gray-400"
      />
    </div>
  );
}

export default AddTask;

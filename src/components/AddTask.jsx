function AddTask() {
  return (
    <div className="flex flex-col justify-center space-y-4 rounded-lg bg-slate-400 p-4 shadow">
      <input
        type="text"
        name=""
        id=""
        placeholder="Título da tarefa"
        className="rounded-md bg-slate-300 p-2 font-semibold text-gray-700 placeholder-gray-500 outline-gray-400"
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Descrição da tarefa"
        className="rounded-md bg-slate-300 p-2 font-semibold text-gray-700 placeholder-gray-500 outline-gray-400"
      />
      <button className="rounded-md bg-slate-500 p-2 font-semibold uppercase text-black opacity-90 hover:bg-black hover:text-white">
        Adicionar tarefa
      </button>
    </div>
  );
}

export default AddTask;

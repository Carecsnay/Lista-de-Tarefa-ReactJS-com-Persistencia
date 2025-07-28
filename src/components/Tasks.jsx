function Tasks(props) {
    return (
        <div>
            <ul className="space-y-4 shadow p-4 bg-slate-400 rounded-lg">
                {props.tasks.map((tasks) => (
                    <li className="flex" key={tasks.id}>
                        <button className="bg-slate-300 text-gray-700 p-2 rounded-md font-semibold w-full">
                            {tasks.title}
                        </button>
                        <button>Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;

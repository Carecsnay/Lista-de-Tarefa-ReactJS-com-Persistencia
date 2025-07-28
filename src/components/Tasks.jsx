function Tasks(props) {
    return (
        <div>
            <ul>
                {props.tasks.map((tasks) => (
                    <li className="bg-slate-300 text-gray-700 p-2 rounded-md m-4 font-semibold" key={tasks.id}>
                        {" "}
                        {tasks.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;

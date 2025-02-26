const TaskList = ({ tasks, markAsDone, loading }) => {
    const recentTasks = tasks.filter(task => !task.completed).slice(0, 5);

    return (
        <div className="w-full p-6">
            <h2 className="text-3xl text-green-600 font-bold mb-4">Most Recent Tasks</h2>
            {recentTasks.map((task, index) => (
                <div key={index} className="mb-4 p-4 bg-gray-200 rounded-md shadow-md flex justify-between items-center">
                    <div>
                        <h3 className="text-xl text-green-700">{task.title}</h3>
                        <p className="text-green-600">{task.description}</p>
                    </div>
                    <button
                        onClick={() => markAsDone(task.id)}
                        className={`border border-black text-black p-2 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300 transition'}`}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Done'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;

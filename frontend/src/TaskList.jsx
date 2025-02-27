import React from "react";

const TaskList = ({ tasks, markAsDone, loadingTaskId }) => {
    return (
        <div className="p-6">
            <h2 className="text-3xl text-purple-600 font-bold mb-4">Task List</h2>
            {tasks.length === 0 ? (
                <p className="text-gray-500">No tasks available.</p>
            ) : (
                <ul className="space-y-4">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="border border-gray-300 p-4 rounded-md flex justify-between items-center"
                        >
                            <div>
                                <h3 className="text-lg font-semibold">{task.title}</h3>
                                <p className="text-gray-600">{task.description}</p>
                            </div>
                            <button
                                onClick={() => markAsDone(task.id)}
                                className={`border border-black text-black p-2 rounded-md hover:bg-gray-300 transition ${
                                    loadingTaskId === task.id ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                disabled={loadingTaskId === task.id}
                                data-testid={`delete-button-${task.id}`}
                            >
                                {loadingTaskId === task.id ? "Loading..." : "Done"}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;

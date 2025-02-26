import { useState } from 'react';

const AddTask = ({ addTask, loading }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <div className="w-full p-6">
            <h2 className="text-3xl text-purple-600 font-bold mb-4">Add a Task</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-purple-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    disabled={loading}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-purple-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    disabled={loading}
                />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className={`bg-blue-500 text-white p-2 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 transition'}`}
                        disabled={loading}
                    >
                        {loading ? 'Adding...' : 'Add'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;

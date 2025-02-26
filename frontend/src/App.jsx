import { useState, useEffect } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './index.css';
import axios from 'axios';

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('http://localhost:8000/api/v1/tasks');
            setTasks(response.data);
        } catch (err) {
            setError('Failed to fetch tasks');
        } finally {
            setLoading(false);
        }
    };

    const addTask = async (task) => {
        setLoading(true);
        setError('');
        try {
            await axios.post('http://localhost:8000/api/v1/tasks', task);
            fetchTasks();
        } catch (err) {
            setError('Failed to add task');
        } finally {
            setLoading(false);
        }
    };

    const markAsDone = async (id) => {
        setLoading(true);
        setError('');
        try {
            await axios.delete(`http://localhost:8000/api/v1/tasks/${id}`);
            fetchTasks();
        } catch (err) {
            setError('Failed to mark task as done');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 p-6">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl grid grid-cols-2 gap-6 border-8 border-double border-gray-300 rounded-md">
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <AddTask addTask={addTask} loading={loading} />
                <div className="border-l-2 border-gray-300">
                    <TaskList tasks={tasks} markAsDone={markAsDone} loading={loading} />
                </div>
            </div>
        </div>
    );
}

export default App;

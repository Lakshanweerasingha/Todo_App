<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function index()
    {
        return Task::where('completed', false)->orderBy('created_at', 'desc')->take(5)->get();
    }

    public function store(Request $request)
    {
        $task = new Task;
        $task->title = $request->title;
        $task->description = $request->description;
        $task->completed = false;
        $task->save();

        return response()->json($task, 201);
    }

    public function markAsDone($id)
    {
        $task = Task::findOrFail($id);
        $task->completed = true;
        $task->save();

        return response()->json(null, 204);
    }
}

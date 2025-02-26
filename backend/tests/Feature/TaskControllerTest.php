<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Task;

class TaskControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_returns_incomplete_tasks()
    {
        Task::factory()->create(['completed' => false]);
        Task::factory()->create(['completed' => true]);

        $response = $this->getJson('/api/v1/tasks');

        $response->assertStatus(200)
                 ->assertJsonCount(1);
    }

    public function test_store_creates_new_task()
    {
        $data = [
            'title' => 'New Task',
            'description' => 'Task Description',
        ];

        $response = $this->postJson('/api/v1/tasks', $data);

        $response->assertStatus(201);
        $this->assertDatabaseHas('tasks', $data);
    }

    public function test_mark_as_done_updates_task()
    {
        $task = Task::factory()->create(['completed' => false]);

        $response = $this->putJson("/api/v1/tasks/{$task->id}");

        $response->assertStatus(204);
        $this->assertDatabaseHas('tasks', ['id' => $task->id, 'completed' => true]);
    }
}

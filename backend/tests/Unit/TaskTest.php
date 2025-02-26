<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\Task;

class TaskTest extends TestCase
{
    public function test_fillable_attributes()
    {
        $task = new Task();
        $fillable = ['title', 'description', 'completed'];

        $this->assertEquals($fillable, $task->getFillable());
    }
}

import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreatTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    findAll() {
        return this.taskService.findAllTask();
    }

    @Post()
    createTask(@Body() createTaskDto:CreatTaskDto) {
        return this.taskService.createTask(createTaskDto);
    }

    @Put(':id/complete')
    updateTask(@Param('id') id:string){
        return this.taskService.updateTask(+id);
    }
}

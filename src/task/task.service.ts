import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entity/task.entity';
import { Repository } from 'typeorm';
import { CreatTaskDto } from './dto/task.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ) {}

    async findAllTask() {
        return await this.taskRepository.find();
    }

    async createTask(createTaskDto: CreatTaskDto) {
        const task = this.taskRepository.create(createTaskDto);
        return await this.taskRepository.save(task);
    }

    async updateTask(id: number) {
        const task = await this.taskRepository.findOne({
            where: {id}
        })

        if(!task){
            throw new NotFoundException(`Task with Id ${id} not found`)
        }

        task.completed = true;

        return await this.taskRepository.save(task);
    }
}

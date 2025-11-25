import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entity/task.entity';
import { Repository } from 'typeorm';
import { CreatTaskDto } from './dto/task.dto';
import { NotFoundError } from 'rxjs';

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class TaskService {
    /**
     * Method where I inject Task Repository (Database)
     */
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ) {}

    /**
     * The method to find all task
     */
    async findAllTask() {
        return await this.taskRepository.find();
    }

    /**
     * The method to create a task
     */
    async createTask(createTaskDto: CreatTaskDto) {
        const task = this.taskRepository.create(createTaskDto);
        return await this.taskRepository.save(task);
    }

    /**
     * The method to update a single task by the task Id
     */
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

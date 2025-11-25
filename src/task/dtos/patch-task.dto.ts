import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from '../dtos/create-task.dto';
export class PatchTaskDto extends PartialType(CreateTaskDto) {}

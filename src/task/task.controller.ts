import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
// import { CreatTaskDto } from './dto/task.dto';
import { CreateTaskDto } from './dtos/create-task.dto';
import { GetTaskParamDto } from './dtos/get-task-param.dto';
import { PatchTaskDto } from './dtos/patch-task.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('{/:id}')
  @ApiOperation({
    summary: 'Fetche a list of registered users on the application',
  })
  @ApiResponse({
    status: 200,
    description: "Users fetched successfully based on the query"
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries return per query',
    example: '10',
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'The position of the page number you want the API to return',
    example: '1',
  })
  findAll(
    @Param() getTaskParamDto: GetTaskParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getTaskParamDto);
    return this.taskService.findAllTask();
  }

  // @Post()
  // createTask(@Body() createTaskDto:CreatTaskDto) {
  //     return this.taskService.createTask(createTaskDto);
  // }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto instanceof CreateTaskDto);
    console.log(typeof createTaskDto);
    return `You have make a request`;
  }

  @Put(':id/complete')
  updateTask(@Param('id') id: string) {
    return this.taskService.updateTask(+id);
  }

  @Patch()
  patchTask(@Body() patchTaskDto: PatchTaskDto) {
    return patchTaskDto;
  }
}

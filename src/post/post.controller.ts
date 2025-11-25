import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './provider/post.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PatchPostDto } from './dtos/patch-post.dto';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('{:userId}')
  getPost(@Param('userId') userId: string) {
    // console.log(userId)
    return this.postService.findAll(userId);
  }

  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
  }


  @ApiOperation({
    summary: 'Updates and existing blog post in the database.',
  })
  @ApiResponse({
    status: 200,
    description:
      'You get a success 20o response if the post is updated successfully',
  })
  @Patch()
  public updatePost(@Body() patchPostsDto: PatchPostDto) {
    console.log(patchPostsDto);
  }

  // @Get()
  // findAll() {
  //   return this.postService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postService.update(+id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postService.remove(+id);
  // }
}

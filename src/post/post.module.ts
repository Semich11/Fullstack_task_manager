import { Module } from '@nestjs/common';
import { PostService } from './provider/post.service';
import { PostController } from './post.controller';

@Module({
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}

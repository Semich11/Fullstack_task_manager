import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dtos/create-post.dto';

@Injectable()
export class PostService {
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll(userId: string) {
    return `This is the ID: ${userId}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }


  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

import { Controller, Get } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller()
export class BlogController {
  constructor(private readonly service: BlogService) {}

  @Get()
  get(id: number) {
    this.service.getBlog(id);
  }
}

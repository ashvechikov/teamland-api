import { Controller, Get } from '@nestjs/common';
import { IBlogService } from './blog.interface';

@Controller()
export class BlogController {
  constructor(private readonly service: IBlogService) {}

  @Get()
  get(id: number) {
    this.service.getBlog(id);
  }
}

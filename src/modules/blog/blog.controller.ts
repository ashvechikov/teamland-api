import { Controller } from '@nestjs/common';
import { IBlogService } from './service/blog.interface';

@Controller()
export class BlogController {
  constructor(private readonly service: IBlogService) {}
}

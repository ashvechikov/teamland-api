import { Controller } from '@nestjs/common';
import { IBlogService } from './repository/blog.interface';

@Controller()
export class BlogController {
  constructor(private readonly servise: IBlogService) {}
}

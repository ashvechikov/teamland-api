import { Controller } from '@nestjs/common';
import { IBlogService } from './blog-service.interface';

@Controller()
export class BlogController {
  constructor(private readonly servise: IBlogService) {}
}

import { Injectable } from '@nestjs/common';
import { IBlogService } from './blog.interface';
import { BlogRepository } from '../blog.repository';
import { Blog } from '../blog.entity';

@Injectable()
export class BlogService implements IBlogService {
  constructor(private readonly repository: BlogRepository) {}

  getBlog(id: number): Promise<Blog> {
    return this.repository.get(id);
  }
}

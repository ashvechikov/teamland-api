import { Injectable } from '@nestjs/common';
import { IBlogService } from './blog.interface';
import { IBlog } from './blog.entity';
import { BlogRepository } from './blog.repository';

@Injectable()
export class BlogService implements IBlogService {
  constructor(private readonly repository: BlogRepository) {}

  getBlog(id: number): Promise<IBlog> {
    return this.repository.get(id);
  }
}

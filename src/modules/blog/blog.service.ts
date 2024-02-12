import { Injectable } from '@nestjs/common';
import { IBlogService } from './blog.interface';
import { IBlog } from './blog.entity';
import { IRepository } from 'src/repository.interface';

@Injectable()
export class BlogService implements IBlogService {
  constructor(private readonly repository: IRepository<IBlog>) {}

  getBlog(id: number): Promise<IBlog> {
    return this.repository.get(id);
  }
}

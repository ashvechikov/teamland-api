import { Injectable } from '@nestjs/common';
import { IBlogService } from './blog.interface';
import { IBlog } from '../model/blog.interface';
import { Repository } from 'src/repository';

@Injectable()
export class BlogService implements IBlogService {
  constructor(private readonly repository: Repository<IBlog>) {}

  getBlog(id: number): Promise<IBlog> {
    return this.repository.get(id);
  }
}

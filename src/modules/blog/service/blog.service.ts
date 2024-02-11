import { Injectable } from '@nestjs/common';
import { IBlogService } from './blog.interface';
import { IRepository } from '../../../repository.interface';
import { IBlog } from '../model/blog.interface';

@Injectable()
export class BlogService implements IBlogService {
  constructor(private readonly repository: IRepository<IBlog>) {}

  getBlog(id: number): Promise<IBlog> {
    return this.repository.get(id);
  }
}

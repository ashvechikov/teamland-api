import { Injectable } from '@nestjs/common';
import { IBlogService } from './blog-service.interface';
import { IRepository } from '../../repository.interface';
import { IBlog } from './blog.interface';

@Injectable()
export class BlogService implements IBlogService {
  constructor(private readonly repository: IRepository<IBlog>) {}

  getBlog(id: number): Promise<IBlog> {
    console.log(id);
    return Promise.resolve(undefined);
  }
}

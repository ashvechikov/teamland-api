import { Injectable } from '@nestjs/common';
import { IRepository } from '../../abstract/repository.interface';
import { Blog } from './blog.entity';

@Injectable()
export class BlogRepository implements IRepository<Blog> {
  get(id: number): Promise<Blog> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<void> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  save(input: Blog): Promise<void> {
    console.log(input);
    throw new Error('Method not implemented.');
  }
  update(input: Blog): Promise<Blog> {
    console.log(input);
    throw new Error('Method not implemented.');
  }
}

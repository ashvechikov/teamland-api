import { Injectable } from '@nestjs/common';
import { IRepository } from '../../abstract/repository.interface';
import { Blog } from './blog.entity';

@Injectable()
export class BlogRepository implements IRepository<Blog> {
  remove(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Blog[]> {
    throw new Error('Method not implemented.');
  }
  findByFieldAll: (field: string, lookupString: unknown) => Promise<Blog[]>;
  findByFieldOne: (field: string, lookupString: unknown) => Promise<Blog>;
  get(id: number): Promise<Blog> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<void> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  save(input: Blog): Promise<Blog> {
    console.log(input);
    throw new Error('Method not implemented.');
  }
  update(input: Blog): Promise<Blog> {
    console.log(input);
    throw new Error('Method not implemented.');
  }
}

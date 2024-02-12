import { Injectable } from '@nestjs/common';
import { IRepository } from '../../repository.interface';
import { IBlog } from './blog.entity';

@Injectable()
export class Repository implements IRepository<IBlog> {
  get(id: number): Promise<IBlog> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<void> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  save(input: IBlog): Promise<void> {
    console.log(input);
    throw new Error('Method not implemented.');
  }
  update(input: IBlog): Promise<IBlog> {
    console.log(input);
    throw new Error('Method not implemented.');
  }
}

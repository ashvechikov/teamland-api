import { Injectable } from '@nestjs/common';
import { IRepository } from './repository.interface';

@Injectable()
export class Repository<T> implements IRepository<T> {
  get(id: number): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  save(input: T): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(input: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
}

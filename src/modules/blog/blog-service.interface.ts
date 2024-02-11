import { IBlog } from './blog.interface';

export interface IBlogService {
  getBlog(id: number): Promise<IBlog>;
}

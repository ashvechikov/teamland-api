import { IBlog } from '../model/blog.interface';

export interface IBlogService {
  getBlog(id: number): Promise<IBlog>;
}

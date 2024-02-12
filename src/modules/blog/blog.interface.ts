import { IBlog } from './blog.entity';

export interface IBlogService {
  getBlog(id: number): Promise<IBlog>;
}

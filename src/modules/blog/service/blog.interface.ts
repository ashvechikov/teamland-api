import { Blog } from '../blog.entity';

export interface IBlogService {
  getBlog(id: number): Promise<Blog>;
}

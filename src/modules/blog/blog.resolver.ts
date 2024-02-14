import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Blog } from './blog.entity';
import { BlogService } from './blog.service';

@Resolver((of) => Blog)
export class BlogResolver {
  constructor(private service: BlogService) {}

  @Query((returns) => Blog)
  async blog(@Args('id', { type: () => Int }) id: number) {
    return this.service.getBlog(id);
  }
}

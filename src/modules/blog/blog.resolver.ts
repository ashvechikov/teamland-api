import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Blog } from './blog.entity';
import { BlogService } from './service/blog.service';
import { BaseResolver } from 'src/abstract/resolver';

@Resolver((of) => Blog)
export class BlogResolver extends BaseResolver(Blog) {
  constructor(private service: BlogService) {
    super();
  }
}

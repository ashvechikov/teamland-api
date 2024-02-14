import { Module } from '@nestjs/common';
import { BlogService } from './service/blog.service';
import { BlogRepository } from './blog.repository';
import { BlogResolver } from './blog.resolver';

@Module({
  providers: [BlogService, BlogRepository, BlogResolver],
})
export class BlogModule {}

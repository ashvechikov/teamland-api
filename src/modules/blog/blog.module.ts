import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogRepository } from './blog.repository';
import { BlogResolver } from './blog.resolver';

@Module({
  controllers: [BlogController],
  providers: [BlogService, BlogRepository, BlogResolver],
})
export class BlogModule {}

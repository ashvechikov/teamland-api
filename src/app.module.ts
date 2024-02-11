import { Module } from '@nestjs/common';
import { BlogModule } from './modules/blog/blog.module';
import { BlogController } from './modules/blog/blog.controller';
import { BlogService } from './modules/blog/service/blog.service';

@Module({
  imports: [BlogModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class AppModule {}

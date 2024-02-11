import { Module } from '@nestjs/common';
import { BlogModule } from './modules/blog/blog.module';
import { BlogController } from './modules/blog/blog.controller';

@Module({
  imports: [BlogModule],
  controllers: [BlogController],
})
export class AppModule {}

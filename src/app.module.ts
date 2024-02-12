import { Module } from '@nestjs/common';
import { BlogModule } from './modules/blog/blog.module';
import { BlogController } from './modules/blog/blog.controller';
import { Repository } from './repository';

@Module({
  imports: [BlogModule],
  controllers: [BlogController],
  providers: [Repository],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './modules/blog/blog.module';
import { CommonModule } from './common/common.module';
import { AbstractModule } from './abstract/abstract.module';

@Module({
  imports: [BlogModule, CommonModule, AbstractModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

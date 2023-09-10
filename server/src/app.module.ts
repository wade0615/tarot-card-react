import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TestController } from './Controller/test.controller';

import { AppService } from './app.service';
import { TestService } from 'src/Service/test.service';

import { TestDao } from 'src/Dao/test.dao';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, TestService, TestDao],
})
export class AppModule {}

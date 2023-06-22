import { MiddlewareConsumer, Module } from '@nestjs/common';

import { FoundationalModule } from '@aicore/modules';
import { LoggerMiddleware } from '@aicore/utils/middlewares';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [FoundationalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddleware)
      .exclude('(.*)/(.*)/image')
      .forRoutes('*');
  }
}

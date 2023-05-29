import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AuthModule, CoreModule, SpaceModule } from '@worknmates/core/modules';
import { LoggerMiddleware } from '@worknmates/core/utils/middlewares';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';

@Module({
  imports: [CoreModule, AuthModule, SpaceModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).exclude('user/(.*)/image', 'company/(.*)/image', 'host/(.*)/image', 'host/(.*)/space/(.*)/image').forRoutes('*');
  }
}

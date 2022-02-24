import {MiddlewareConsumer, NestModule} from "@nestjs/common";
import {LoggerMiddleware} from "../http/middlewares/logger.middleware";

export class BaseModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/')
  }

}

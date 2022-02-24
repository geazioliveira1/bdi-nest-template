import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dynamoose from 'dynamoose'

async function bootstrap() {
  dynamoose.aws.sdk.config.update({
    region: 'us-east-1',
  });
  dynamoose.aws.ddb.local('http://ip172-18-0-62-c8btptlmrepg00e0cj00-8000.direct.labs.play-with-docker.com')

  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap();

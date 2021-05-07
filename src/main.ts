import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
  next();
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //aap.
  await app.listen(4000);
}
bootstrap();

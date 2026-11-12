import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module.js';
import { AllExceptionsFilter } from './filtros/http-exception.filter.js';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Serve os arquivos salvos em ./uploads diretamente via HTTP.
  app.useStaticAssets(join(import.meta.dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });
  
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(process.env.PORT ?? 3000);
  
}
await bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from '../dist/app.module.js';

let cachedServer;

async function bootstrapServer() {
  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule);
    
    nestApp.enableCors();
    
    await nestApp.init();
    
    cachedServer = nestApp.getHttpAdapter().getInstance();
  }
  return cachedServer;
}

export default async (req, res) => {
  const server = await bootstrapServer();
  return server(req, res);
};

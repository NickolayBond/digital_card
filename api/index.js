import { NestFactory } from '@nestjs/core';
import { AppModule } from '../dist/src/app.module.js';
import serverless from 'serverless-http';

let cachedServer;

async function bootstrapServer() {
  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule);
    await nestApp.init();
    const expressApp = nestApp.getHttpAdapter().getInstance();
    cachedServer = serverless(expressApp);
  }
  return cachedServer;
}

export default async (req, res) => {
  const server = await bootstrapServer();
  return server(req, res);
};

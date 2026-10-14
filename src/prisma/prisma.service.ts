import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  constructor() {
    const pool = new pg.Pool({ 
      connectionString: process.env.DATABASE_URL,
      max: 2, 
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000, 
    });
    const adapter = new PrismaPg(pool);

    super({ adapter });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

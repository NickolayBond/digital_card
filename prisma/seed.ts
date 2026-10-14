import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.profile.deleteMany();

  const profile = await prisma.profile.create({
    data: {
      name: 'Николай Бондаренко',
      description:
        'Backend-разработчик на Node.js с опытом построения серверных приложений и API на высоконагруженных e-com платформах. Разрабатываю на JavaScript и TypeScript, использую NestJS и Express, проектирую реляционные базы данных (PostgreSQL) и кеширование (Redis).',
      links: {
        create: [
          { label: 'Локация', url: 'РФ, Москва' },
          { label: 'Английский', url: 'B2' },
        ],
      },
      skills: {
        create: [
          { name: 'TypeScript' },
          { name: 'JavaScript' },
          { name: 'NestJS' },
          { name: 'Express' },
          { name: 'Fastify' },
          { name: 'GraphQL' },
          { name: 'Prisma' },
          { name: 'TypeORM' },
          { name: 'PostgreSQL' },
          { name: 'Redis' },
          { name: 'Kafka' },
          { name: 'Docker' },
          { name: 'CI/CD (GitLab CI, GitHub Actions)' },
          { name: 'Jest / Supertest' },
          { name: 'Prometheus + Grafana' },
        ],
      },
      experience: {
        create: [
          {
            company: 'ВсеИнструменты.ру',
            position: 'Backend node.js разработчик',
            period: '07.2023 - настоящее время',
            achievements: [
              'Разработал микросервис для управления остатками на складах в реальном времени с синхронизацией через Kafka.',
              'Реализовал систему динамического ценообразования с кэшированием актуальных цен в Redis.',
              'Разработал API-шлюз для внешних партнёров с REST, rate limiting и API key auth.',
              'Провел рефакторинг массового импорта остатков: исправил race condition, снизив время обновления до 2 секунд.',
              'Настроил мониторинг (Prometheus + Grafana) и алерты в Opsgenie.',
              'Оптимизировал нагрузочные отчёты по остаткам с использованием материализованных представлений и индексов.',
            ],
          },
          {
            company: '23 BUS',
            position: 'Backend node.js разработчик',
            period: '05.2022 – 06.2023',
            achievements: [
              'Разработал REST API учёта рабочего времени водителей (NestJS + Prisma) с привязкой к треку ГЛОНАСС.',
              'Настроил синхронизацию с API ГЛОНАСС каждые 20 секунд с сохранением в PostgreSQL и кэш Redis.',
              'Реализовал расчет сдельной зарплаты со штрафами за опоздания и модуль контроля ГСМ.',
              'Автоматизировал рассылку путевых листов водителям через Telegram-бота с генерацией PDF.',
            ],
          },
        ],
      },
      projects: {
        create: [
          {
            name: 'Внутренняя платформа автоматизации логистических процессов',
            link: 'Стек: Node.js, NestJS, Fastify, TypeScript, PostgreSQL, Redis, Kafka, TypeORM',
          },
          {
            name: 'Внутренняя ERP-система для диспетчерской службы маршрутных такси',
            link: 'Стек: Node.js, NestJS, TypeScript, PostgreSQL, Redis, Prisma, Kafka, PDFKit, Telegraf.js',
          },
        ],
      },
    },
  });

  console.log('Seed completed успешно! ID профиля:', profile.id);
}

main()
  .catch((e) => {
    console.error('Ошибка выполнения сидера:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });

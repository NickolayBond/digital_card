TRUNCATE TABLE "Profile" RESTART IDENTITY CASCADE;

INSERT INTO
  "Profile" ("id", "name", "description")
VALUES
  (
    'cl-profile-nikolai-bondarenko-id',
    'Николай Бондаренко',
    'Backend-разработчик на Node.js с опытом построения серверных приложений и API на высоконагруженных e-com платформах. Разрабатываю на JavaScript и TypeScript, использую NestJS и Express, проектирую реляционные базы данных (PostgreSQL) и кеширование (Redis).'
  );

INSERT INTO
  "Link" ("id", "label", "url", "profileId")
VALUES
  (
    'cl-link-1',
    'Локация',
    'РФ, Москва',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-link-2',
    'Английский',
    'B2',
    'cl-profile-nikolai-bondarenko-id'
  );

INSERT INTO
  "Skill" ("id", "name", "profileId")
VALUES
  (
    'cl-skill-1',
    'TypeScript',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-2',
    'JavaScript',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-3',
    'NestJS',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-4',
    'Express',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-5',
    'Fastify',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-6',
    'GraphQL',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-7',
    'Prisma',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-8',
    'TypeORM',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-9',
    'PostgreSQL',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-10',
    'Redis',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-11',
    'Kafka',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-12',
    'Docker',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-13',
    'CI/CD (GitLab CI, GitHub Actions)',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-14',
    'Jest / Supertest',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-skill-15',
    'Prometheus + Grafana',
    'cl-profile-nikolai-bondarenko-id'
  );

INSERT INTO
  "Experience" (
    "id",
    "company",
    "position",
    "period",
    "achievements",
    "profileId"
  )
VALUES
  (
    'cl-exp-1',
    'ВсеИнструменты.ру',
    'Backend node.js разработчик',
    '07.2023 - настоящее время',
    ARRAY [
            'Разработал микросервис для управления остатками на складах в реальном времени с синхронизацией через Kafka.',
            'Реализовал систему динамического ценообразования с кэшированием актуальных цен в Redis.',
            'Разработал API-шлюз для внешних партнёров с REST, rate limiting и API key auth.',
            'Провел рефакторинг массового импорта остатков: исправил race condition, снизив время обновления до 2 секунд.',
            'Настроил мониторинг (Prometheus + Grafana) и алерты в Opsgenie.',
            'Оптимизировал нагрузочные отчёты по остаткам с использованием материализованных представлений и индексов.'
        ],
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-exp-2',
    '23 BUS',
    'Backend node.js разработчик',
    '05.2022 – 06.2023',
    ARRAY [
            'Разработал REST API учёта рабочего времени водителей (NestJS + Prisma) с привязкой к треку ГЛОНАСС.',
            'Настроил синхронизацию с API ГЛОНАСС каждые 20 секунд с сохранением в PostgreSQL и кэш Redis.',
            'Реализовал расчет сдельной зарплаты со штрафами за опоздания и модуль контроля ГСМ.',
            'Автоматизировал рассылку путевых листов водителям через Telegram-бота с генерацией PDF.'
        ],
    'cl-profile-nikolai-bondarenko-id'
  );

INSERT INTO
  "Project" ("id", "name", "link", "profileId")
VALUES
  (
    'cl-proj-1',
    'Внутренняя платформа автоматизации логистических процессов',
    'Стек: Node.js, NestJS, Fastify, TypeScript, PostgreSQL, Redis, Kafka, TypeORM',
    'cl-profile-nikolai-bondarenko-id'
  ),
  (
    'cl-proj-2',
    'Внутренняя ERP-система для диспетчерской службы маршрутных такси',
    'Стек: Node.js, NestJS, TypeScript, PostgreSQL, Redis, Prisma, Kafka, PDFKit, Telegraf.js',
    'cl-profile-nikolai-bondarenko-id'
  );
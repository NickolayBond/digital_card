# Visit Card API

Микросервис визитной карточки (резюме). Построен на базе **NestJS**, **GraphQL (Apollo)** и **Prisma ORM 7**.

## 🛠️ Стек технологий
- **Backend:** Node.js 22, NestJS 12, TypeScript
- **API:** GraphQL, Apollo Server 5, `@as-integrations/express5`
- **ORM:** Prisma 7 + `@prisma/adapter-pg` (PostgreSQL)
- **Compiler:** SWC (вместо стандартного tsc для ESM-импортов)

## 🚀 Быстрый старт (Локально)

### 1. Подготовка окружения
Создайте файл `.env` в корне проекта и укажите строку подключения к PostgreSQL:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/digital_card?schema=public"
```

### 2. Установка зависимостей и генерация Prisma
```bash
npm install
npx prisma generate
```

### 3. Разработка (hor-eload)
Команда запускает проверку типов и компилятор SWC в watch-режиме:
```bash
npm run start
```
API будет доступно по адресу: `http://localhost:3000/graphql`

---

## 🐳 Запуск в Docker (Dev-режим)

Окружение автоматически поднимает базу данных, накатывает структуру таблиц и запускает NestJS с поддержкой горячей перезагрузки (hot-reload):

```bash
# Сборка и запуск контейнеров
docker compose up --build

# Первичная инициализация таблиц и запуск сидера (выполнять при первом старте)
docker compose exec app npx prisma migrate dev --name init

# Ручной перезапуск заполнения БД данными (сидирование)
docker compose exec app npm run db:seed
```

---

## 📋 Доступные скрипты

- `npm run start` - Запуск приложения в dev-режиме (с отслеживанием изменений через SWC).
- `npm run build` - Компиляция проекта в папку `dist`.
- `npm run start:prod` - Продакшн-старт скомпилированного приложения (`node dist/main.js`).
- `npm run db:migrate` - Применение готовых миграций на проде (`prisma migrate deploy`).
- `npm run db:seed` - Заполнение базы данных тестовыми данными резюме.

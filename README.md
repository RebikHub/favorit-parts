
# Favorit Parts — поиск автозапчастей по артикулу

SPA на React для подбора автозапчастей: по артикулу загружается список производителей, затем по выбранному бренду — аналоги и предложения.

## Стек

- React 19
- Vite
- Redux Toolkit (RTK Query)
- Bootstrap
- JavaScript (без TypeScript)

## Функционал

- Поиск по артикулу с debounce.
- Список производителей по артикулу.
- Выбор бренда → загрузка аналогов.
- Таблица: название/производитель, цена, остаток на складе.
- Обработка загрузки и ошибок (пустой ответ, сбой сети).

## Запуск

```bash
npm install
npm run dev
```

Приложение: `http://localhost:5173`.

## Переменные окружения

В корне создать `.env`:

```dotenv
VITE_API_PARTS='https://api.favorit-parts.ru'
VITE_API_KEY='00000000-0000-0000-0000-000000000001'
```

## Скрипты

- `npm run dev` — dev-сервер
- `npm run build` — production-сборка
- `npm run preview` — предпросмотр сборки

## Структура

```
src/
├── api/         # RTK Query API (hsPriceApi)
├── components/  # Search, ListGroup, Table
├── store/       # Redux store
├── utils/       # хуки (useDebounce), обработка ошибок
├── App.jsx
└── main.jsx
```

# Лендинг-портфолио — Александр Деменев

Сайт-визитка под вакансию «внедрение ИИ в бизнес-процессы / автоматизация рутины» в foodtech SaaS-компании.

Концепт **«Process ledger»**: страница ведёт через измеримый эффект и матрицу «обязанность вакансии → чем закрываю». Акцентный цвет появляется только на автоматизированной стороне — цвет кодирует факт автоматизации.

## Стек

- React 18 + Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Шрифты: Space Grotesk (заголовки), IBM Plex Sans (текст), IBM Plex Mono (данные)

## Запуск

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # сборка в dist/
npm run preview    # предпросмотр сборки
```

## Структура

```
src/
  App.jsx               # сборка секций
  index.css             # Tailwind + дизайн-токены (@theme)
  data/content.js       # ВСЕ тексты и данные в одном месте
  components/
    Nav, Hero, Proof, Matrix, Projects,
    Ecosystem, Method, StackProfile, Contact, Footer
    ui.jsx              # Container, SectionHeading, TierDot
public/
  resume.pdf            # резюме (кнопки «Резюме PDF»)
```

## Как редактировать контент

Почти всё правится в `src/data/content.js` — тексты hero, карточки проектов,
матрица обязанностей (поле `tier`: `done` / `pet` / `growth`), стек, контакты.

Пометка `needsDetail: true` в проектах — то, что стоит дополнить реальными
деталями (Vibehost, Telegram-боты).

## Деплой

Vercel: импорт репозитория → framework определится как Vite автоматически.
`Build: npm run build`, `Output: dist`.

# বাজার দর / BazarDor

A Bengali-first web app that tracks daily market prices of essential goods — rice, lentils, oil, vegetables, fish, meat, eggs, and spices — with category browsing, market-by-market comparison, and price change tracking, all in one place.

The UI is in Bengali and fully responsive, backed by the Programming Hero “bazardor” public API.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components) |
| UI Library | [React 19](https://react.dev) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) + [daisyUI 5](https://daisyui.com) |
| Authentication | [better-auth](https://www.better-auth.com) (email/password + Google & GitHub OAuth) |
| Database | [MongoDB](https://www.mongodb.com) via `@better-auth/mongo-adapter` |
| Notifications | [react-toastify](https://fkhadra.github.io/react-toastify) |
| Extras | [react-marquee-text](https://www.npmjs.com/package/react-marquee-text) |
| Data Source | Programming Hero BazarDor API |

---

## Key Features

1. **Live Market Price Dashboard** — Today’s prices with day-over-day change indicators (▲ up / ▼ down), plus a scrolling price ticker for at-a-glance updates.

2. **Category & Product Exploration** — Browse products by category, with a searchable grid and a dedicated product page showing per-market min/max/average prices.

3. **Full Authentication (better-auth)** — Secure email/password sign-up and sign-in, plus one-click Google and GitHub social login, with session handling and route protection.

4. **User Profile & Session-Aware Header** — Protected profile page to view account info and update your name, and a header dropdown that adapts to the signed-in user with a functional sign-out.

5. **Sorting & Feedback UX** — Sort products by price (low-to-high / high-to-low), dynamic result counts, and toast notifications for auth and profile actions.

---

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
API_URL=https://openapi.programming-hero.com

BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_DB_URL=your_mongodb_connection_string

# Optional — social login (leave blank to disable)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### OAuth Redirect URIs

When configuring social login, register these callback URLs with the providers:

- Google: `http://localhost:3000/api/auth/callback/google`
- GitHub: `http://localhost:3000/api/auth/callback/github`

---

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├─ app/
│  ├─ api/auth/[...all]/   # better-auth route handler
│  ├─ category/[slug]/     # Category listing page
│  ├─ product/[slug]/      # Product detail page
│  ├─ signin/ signup/      # Auth pages
│  ├─ profile/             # Protected profile page
│  ├─ privacy/             # Privacy policy
│  └─ layout.tsx           # Root layout (header, footer, toasts)
├─ components/             # Header, Footer, UserMenu, home sections
├─ lib/auth-client.ts      # better-auth React client
├─ auth.ts                 # better-auth server config
└─ Type/type.ts            # Shared TypeScript types
```

---

## License

This project was built as a learning assignment. All product data is indicative and may vary based on real market conditions.

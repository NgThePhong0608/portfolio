# React + Vite

## Test the production build locally with Docker

Build and start the production-like container:

```bash
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080). Stop it with:

```bash
docker compose down
```

To run without Compose:

```bash
docker build -t portfolio-v2 .
docker run --rm -p 8080:80 portfolio-v2
```

## Develop with Docker and hot reload

Run the Vite development server with the project directory mounted into the
container:

```bash
docker compose -f docker-compose.dev.yml up --build
```

Open [http://localhost:5173](http://localhost:5173). Changes to files in
`src/` are detected automatically and Vite HMR updates the browser. Stop it
with:

```bash
docker compose -f docker-compose.dev.yml down
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

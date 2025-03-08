import { Hono } from 'hono';
import { cors } from 'hono/cors';
// import { authMiddleware } from '@/middleware/auth';
import { routes } from '@/routes';
import { Bindings } from '@/types/common';
import { createDb } from '@/db';

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:8787'],
    credentials: true,
  })
);

app.use('*', async (c, next) => {
  const db = createDb({
    DATABASE_URL: c.env.DATABASE_URL,
  });
  c.set('db', db);
  await next();
});

app.get('/', (c) => {
  return c.text('Server is running');
});

// const privateApi = new Hono<{ Bindings: Bindings }>();
// privateApi.use('*', authMiddleware);
// privateApi.route('/', );

app.route('/api', routes);

app.onError((err, c) => {
  console.error(err);
  return c.json({ error: 'Internal Server Error' }, 500);
});

export default app;
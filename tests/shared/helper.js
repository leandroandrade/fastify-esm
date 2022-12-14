import app from '../../src/app.js';

export function buildApp(t) {
  const fastify = app();

  t.teardown(async () => {
    await fastify.close();
  });
  return fastify;
}

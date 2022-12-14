import t from 'tap';
import { buildApp } from '../shared/helper.js';

const { test } = t;

test('should return sample response', async (t) => {
  const fastify = buildApp(t);

  const response = await fastify.inject({
    method: 'GET',
    url: '/docs',
  });

  t.equal(response.statusCode, 302);
  t.equal(typeof response.payload, 'string');
});

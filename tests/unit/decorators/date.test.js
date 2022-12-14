import Fastify from 'fastify';
import t from 'tap';

import dateDecorator from '../../../src/decorators/date.js';

const { test } = t;

test('should format date with locale string', async (t) => {
  const fastify = Fastify();
  t.teardown(fastify.close.bind(fastify));

  await fastify.register(dateDecorator);
  t.equal(fastify.dateFormat.toLocaleDate(new Date(2022, 10, 25)), 'November 25, 2022');
});

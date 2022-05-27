import t from 'tap';
import Fastify from 'fastify';
import dateDecorator from '../../../../src/domain/shared/plugins/date-plugin.js';

const { test } = t;

const fastify = Fastify();

t.before(async () => {
    await fastify.register(dateDecorator);
});

test('should format date with locale string', async t => {
    t.equal(fastify.dateFormat.toLocaleDate(new Date(2022, 10, 25)), 'November 25, 2022');
});

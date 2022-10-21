import t from 'tap';
import { buildApp } from '../shared/helper.js';

const { test } = t;

test('should return sample response', async t => {
    const fastify = buildApp(t);

    const response = await fastify.inject({
        method: 'GET',
        url: '/api/sample',
    });
    t.equal(response.statusCode, 200);
    t.same(response.json(), { key: 1, today: 'November 25, 2022', ids: [] });
});

test('should return sample response with ids', async t => {
    const fastify = buildApp(t);

    const response = await fastify.inject({
        method: 'GET',
        url: '/api/sample/?ids=foo&ids=bar',
    });
    t.equal(response.statusCode, 200);
    t.same(response.json(), { key: 1, today: 'November 25, 2022', ids: ['foo', 'bar'] });
});

test('should return sample response with only one ids', async t => {
    const fastify = buildApp(t);

    const response = await fastify.inject({
        method: 'GET',
        url: '/api/sample/?ids=foo',
    });
    t.equal(response.statusCode, 200);
    t.same(response.json(), { key: 1, today: 'November 25, 2022', ids: ['foo'] });
});

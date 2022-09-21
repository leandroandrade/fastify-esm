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
    t.same(response.json(), { key: 1, today: 'November 25, 2022' });
});

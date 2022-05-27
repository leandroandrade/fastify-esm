import t from 'tap';
import Fastify from 'fastify';
import setHandler from '../../../src/configurations/handler.js';

const { test } = t;

test('should return generic error', async t => {
    const app = Fastify();
    setHandler(app);

    app.get('/', (request, reply) => {
        throw new Error('generic error');
    });

    const response = await app.inject('/');
    t.equal(response.statusCode, 500);

    const json = response.json();
    t.equal(json.message, 'Internal Server Error!');
    t.equal(json.code, 500);
});

test('should return validation error', async t => {
    const app = Fastify();
    setHandler(app);

    const schema = {
        body: {
            type: 'object',
            required: ['value'],
            properties: {
                value: { type: 'string' },
            },
        },
    };
    app.post('/', { schema }, (request, reply) => {
        return reply.send('success!');
    });

    const response = await app.inject({
        method: 'POST',
        url: '/',
    });
    t.equal(response.statusCode, 400);

    const json = response.json();
    t.equal(json.message, 'body should be object');
    t.equal(json.code, 400);
});

test('should return specific error', async t => {
    class SomeError extends Error {
        constructor(message, statusCode) {
            super(message);

            this.statusCode = statusCode;
        }
    }
    const app = Fastify();
    setHandler(app);

    app.get('/', (request, reply) => {
        throw new SomeError('Specific Error!', 422);
    });

    const response = await app.inject('/');
    t.equal(response.statusCode, 422);

    const json = response.json();
    t.equal(json.message, 'Specific Error!');
    t.equal(json.code, 422);
});

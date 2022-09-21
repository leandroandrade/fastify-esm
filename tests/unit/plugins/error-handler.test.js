import Fastify from 'fastify';
import t from 'tap';
import errorHandler from '../../../src/plugins/error-handler.js';

const { test } = t;

test('should format date with locale string', async t => {
    const fastify = Fastify();
    t.teardown(fastify.close.bind(fastify));

    await fastify.register(errorHandler);

    const schema = {
        params: {
            message: {
                type: 'string',
                maxLength: 2,
            },
        },
    };
    fastify.get('/:message', { schema }, async (req, reply) => {
        t.fail('should not pass here!');
    });

    const response = await fastify.inject({
        method: 'GET',
        url: '/hello',
    });

    t.equal(response.statusCode, 400);
    t.strictSame(response.json(), {
        statusCode: 400,
        error: 'Bad Request',
        message: 'params/message must NOT have more than 2 characters',
    });
});

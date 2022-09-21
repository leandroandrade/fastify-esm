import fp from 'fastify-plugin';
import swagger from '@fastify/swagger';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function swaggerPlugin(fastify, opts) {
    fastify.register(swagger, {
        routePrefix: '/docs',
        exposeRoute: true,
        mode: 'static',
        specification: {
            path: join(__dirname, '..', 'swagger', 'sample-swagger.yaml'),
        },
    });
}

export default fp(swaggerPlugin);

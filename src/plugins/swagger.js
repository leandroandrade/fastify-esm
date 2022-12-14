import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import fp from 'fastify-plugin';
import swagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function swaggerPlugin(fastify, opts) {
  fastify.register(swagger, {
    exposeRoute: true,
    mode: 'static',
    specification: {
      path: join(__dirname, '..', 'swagger', 'sample-swagger.yaml'),
    },
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    logLevel: 'silent',
  });
}

export default fp(swaggerPlugin);

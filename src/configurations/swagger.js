import swagger from '@fastify/swagger';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default app => {
    app.register(swagger, {
        routePrefix: '/docs',
        exposeRoute: true,
        mode: 'static',
        specification: {
            path: join(__dirname, '..', 'swagger', 'sample-swagger.yaml'),
        },
    });
};

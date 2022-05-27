import autoLoad from '@fastify/autoload';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default app => {
    app.register(autoLoad, {
        dir: join(__dirname, '..', 'domain', 'routes'),
        options: { prefix: 'api' },
    });
};

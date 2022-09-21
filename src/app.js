import Fastify from 'fastify';
import autoLoad from '@fastify/autoload';
import { randomUUID as uuid } from 'crypto';
import { join } from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function buildApp() {
    const app = Fastify({
        logger: process.env.NODE_ENV !== 'test',
        genReqId(req) {
            return uuid();
        },
    });

    app.register(autoLoad, {
        dir: join(__dirname, 'plugins'),
    });

    app.register(autoLoad, {
        dir: join(__dirname, 'decorators'),
    });

    app.register(autoLoad, {
        dir: join(__dirname, 'routes'),
        options: { prefix: 'api' },
    });

    return app;
}

export default buildApp;

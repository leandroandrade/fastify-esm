import Fastify from 'fastify';
import { randomUUID as uuid } from 'node:crypto';

import setRoutes from './routes.js';
import setHandler from './handler.js';
import setPlugins from './plugins.js';
import setSwagger from './swagger.js';

const app = Fastify({
    logger: process.env.NODE_ENV !== 'test',
    genReqId(req) {
        return uuid();
    },
});

setSwagger(app);
setPlugins(app);
setRoutes(app);
setHandler(app);

export default app;

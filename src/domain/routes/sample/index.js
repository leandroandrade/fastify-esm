import { getSampleSchema } from './schema.js';
import { makeSampleController } from '../../../data/factories/make-sample-controller.js';

export default async (fastify, opts) => {
    fastify.get('/', getSampleSchema, (req, reply) => {
        return makeSampleController(fastify).handle(req, reply);
    });
};

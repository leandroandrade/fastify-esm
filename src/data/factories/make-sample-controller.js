import { SampleController } from '../controllers/sample-controller.js';
import { SampleRepository } from '../repositories/sample-repository.js';

export const makeSampleController = fastify =>
    new SampleController(fastify, new SampleRepository());

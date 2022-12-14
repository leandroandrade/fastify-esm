import fp from 'fastify-plugin';

async function errorHandlerPlugin(fastify, opts) {
  fastify.setErrorHandler((err, req, reply) => {
    req.log.error({ err }, err?.message);
    reply.send(err);
  });
}

export default fp(errorHandlerPlugin);

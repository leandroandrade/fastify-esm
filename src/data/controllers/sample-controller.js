export class SampleController {
  constructor(fastify, repository) {
    this.fastify = fastify;
    this.repository = repository;
  }

  async handle(req, reply) {
    const { key, ids } = req.query;

    this.fastify.log.info('Sample logging...');
    const date = this.repository.getDateRepository(2022, 10, 25);
    return reply.send({
      key,
      today: this.fastify.dateFormat.toLocaleDate(date),
      ids,
    });
  }
}

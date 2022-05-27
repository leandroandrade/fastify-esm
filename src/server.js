import fastify from './configurations/app.js';

const port = process.env.PORT || 8080;

fastify
    .listen(3000, '0.0.0.0')
    .then(() => console.log(`App running at ${port}`))
    .catch(err => console.error(err));

const signals = ['SIGTERM', 'SIGINT'];
signals.forEach(signal => {
    process.on(signal, async () => {
        try {
            console.info(`${signal} signal received. Closing application...`);

            console.info('Closing HTTP server...');
            await fastify.close();
            console.info('HTTP server closed!');

            console.info('Application closed successfuly!');
            process.exit(0);
        } catch (err) {
            console.error(`Application exited with error: ${err}`);
            process.exit(1);
        }
    });
});

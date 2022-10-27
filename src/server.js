import closeWithGrace from 'close-with-grace';
import buildApp from './app.js';

const app = buildApp();
const port = process.env.PORT || 8080;

app.listen({ port, host: '0.0.0.0' })
    .then(() => console.log(`App running at ${port}`))
    .catch(err => console.error(err));

closeWithGrace({ delay: 10000 }, async ({ signal }) => {
    try {
        console.info(`${signal} signal received. Closing application...`);

        console.info('Closing HTTP server...');
        await app.close();
        console.info('HTTP server closed!');

        console.info('Application closed successfuly!');
        process.exit(0);
    } catch (err) {
        console.error(`Application exited with error: ${err}`);
        process.exit(1);
    }
});

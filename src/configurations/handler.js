export default app => {
    app.setErrorHandler((error, request, reply) => {
        app.log.error(error);

        const { statusCode, message, date = new Date(), validation } = error;

        if (validation) {
            return reply.status(400).send({
                code: 400,
                message,
                date,
            });
        }

        if (statusCode) {
            return reply.status(statusCode).send({
                code: statusCode,
                message,
                date,
            });
        }

        return reply.status(statusCode || 500).send({
            code: 500,
            message: 'Internal Server Error!',
            date,
        });
    });
};

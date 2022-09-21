export const getSampleSchema = {
    schema: {
        querystring: {
            key: {
                type: 'integer',
                default: 1,
                minimum: 1,
            },
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    key: {
                        type: 'integer',
                    },
                    today: {
                        type: 'string',
                    },
                },
            },
        },
    },
};

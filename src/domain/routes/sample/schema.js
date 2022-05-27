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
            400: {
                type: 'object',
                properties: {
                    code: { type: 'integer' },
                    message: { type: 'string' },
                    date: { type: 'string' },
                },
            },
            404: {
                type: 'object',
                properties: {
                    code: { type: 'integer' },
                    message: { type: 'string' },
                    date: { type: 'string' },
                },
            },
            500: {
                type: 'object',
                properties: {
                    code: { type: 'integer' },
                    message: { type: 'string' },
                    date: { type: 'string' },
                },
            },
        },
    },
};

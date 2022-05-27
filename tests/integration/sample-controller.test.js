import t from 'tap';
import app from '../../src/configurations/app.js';

const { test } = t;

test('should return sample response', async t => {
    const response = await app.inject({
        method: 'GET',
        url: '/api/sample',
    });
    t.equal(response.statusCode, 200);
    t.same(response.json(), { key: 1, today: 'November 25, 2022' });
});

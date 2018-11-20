const assert = require('assert');
const request = require('supertest');
const app = require('../app');


describe('The express app ', () => {
    it('Handles api/get', (done) => {
        request(app)
            .get('/api')
            .end((err, res) => {
                assert(res.body.name == 'john');
                done();
            });
    });
});
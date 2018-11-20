const app = require('../../app');
const request = require('supertest');
const assert = require('assert');
const mongoose = require('mongoose');
const Driver = mongoose.model('driver');

describe('drivers Controller 테스트', () => {
    it('Post to api/drivers creates a new Driver', (done) => {
        Driver.count().then((count) => {
            request(app)
                .post('/api/driver')
                .send({
                    email: 'Test@test.com'
                })
                .end(() => {
                    Driver.count().then(newCount => {
                        assert(count + 1 === newCount);
                        done();
                    })
                });
        });
    });
});
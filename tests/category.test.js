// tests/category.test.js

const request = require('supertest');
const app = require('../app'); // Aici trebuie să fie calea către fișierul tău app.js

describe('Category Routes', function() {
  describe('GET /api/categories', function() {
    it('responds with json containing a list of all categories', function(done) {
      request(app)
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('POST /api/categories', function() {
    it('responds with json containing the new category', function(done) {
      const data = { name: 'New Category', description: 'A new category description' };
      request(app)
        .post('/api/categories')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          // Add here more tests about the response body
          done();
        });
    });
  });

  // Adaugă aici teste similare pentru GET by ID, PUT și DELETE
});

module.exports = app; // Asigură-te că serverul este exportat din app.js pentru a putea fi utilizat aici

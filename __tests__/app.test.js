const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('test the GET route', async() => {
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it('test the /echo POST route', async() => {
    const res = await request(app)
      .post('/echo')
      .send({ 'name': 'nelly' });

    expect(res.text).toEqual('{"name":"nelly"}');

  });

  it('test the /red GET route', async() => {
    const res = await request(app)
      .get('/red');

    expect(res.text).toEqual('<h1>red</h1>');
  });

  it('test the /green GET route', async() => {
    const res = await request(app)
      .get('/green');

    expect(res.text).toEqual('<h1>green</h1>');
  });

  it('test the /blue GET route', async() => {
    const res = await request(app)
      .get('/blue');

    expect(res.text).toEqual('<h1>blue</h1>');
  });
});

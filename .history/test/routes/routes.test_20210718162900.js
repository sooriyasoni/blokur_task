const request = require('supertest');
const app = require('../server');

afterEach(async()=>{
  await app.close();
})

describe('Get Artsit', () => {
  it('should get artist', async (done) => {
    const res = await request(app).
    get('/api/artist');
    expect(res.statusCode).toEqual(200);
    done();
  })
})

describe('Get Catogories', () => {
  it('should get categories', async () => {
    const res = await request(app).
    get('/api/category');
    expect(res.statusCode).toEqual(200);
  })
})

describe('Get Album', () => {
  it('should get Album', async () => {
    const res = await request(app).
    get('/api/album');
    expect(res.statusCode).toEqual(200);
  })
})

describe('Get Playlist', () => {
  it('should get Album', async () => {
    const res = await request(app).
    get('/api/playlist');
    expect(res.statusCode).toEqual(200);
  })
})
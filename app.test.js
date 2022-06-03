const axios = require('axios');
const API_URL = 'http://localhost:3001/api';

// API
// describe('API', () => {

//   describe('Ping', () => {

//     let data;
//     let status

//     beforeAll(async() => {
//       const responce = await axios.get(`${API_URL}/ping`);
//       data = responce.data;
//       status = responce.status;
//     });

//     it("Status is 200", async () => {
//       expect(status).toEqual(200);
//     });

//     it("Data is object", async () => {
//       expect(typeof data).toEqual('object');
//     });

//     it("success property equal true", async () => {
//       expect('success' in data && data.success === true).toEqual(true);
//     });

//   });

// });





// Sets
describe('Sets', () => {

  // Ping
  describe('Ping', () => {

    let data;
    let status

    beforeAll(async() => {
      const responce = await axios.get(`${API_URL}/sets/ping`);
      data = responce.data;
      status = responce.status;
    });

    it("Status is 200", async () => {
      expect(status).toEqual(200);
    });

    it("Data is object", async () => {
      expect(typeof data).toEqual('object');
    });

    it("success property equal true", async () => {
      expect('success' in data && data.success === true).toEqual(true);
    });

  });
  
  // Get all sets
  describe('Get all sets', () => {

    let data;
    let status

    beforeAll(async() => {
      const responce = await axios.get(`${API_URL}/sets`);
      data = responce.data;
      status = responce.status;
    });

    it("Status is 200", async () => {
      expect(status).toEqual(200);
    });

    it("Data is array", async () => {
      expect(Array.isArray(data)).toEqual(true);
    });

  });

});
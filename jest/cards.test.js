const axios = require('axios');
const API_URL = 'http://localhost:3001/api';

// Sets
describe('Cards', () => {

  // Ping
  describe('Ping', () => {

    let data;
    let status

    beforeAll(async() => {
      const response = await axios.get(`${API_URL}/cards/ping`);
      data = response.data;
      status = response.status;
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

});

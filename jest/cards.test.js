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

  // Get all cards
  describe('Get all cards', () => {

    let data;
    let status

    beforeAll(async() => {
      const response = await axios.get(`${API_URL}/cards`);
      data = response.data;
      status = response.status;
    });

    it("Status is 200", async () => {
      expect(status).toEqual(200);
    });

    it("Data is array", async () => {
      expect(Array.isArray(data)).toEqual(true);
    });

  });

  // Get card by id
  describe('Get card by id', () => {

    // card exist
    describe('card exist', () => {

      let data;
      let status
  
      beforeAll(async() => {
        const response = await axios.get(`${API_URL}/cards/1`);
        data = response.data;
        status = response.status;
      });
  
      it("Status is 200", async () => {
        expect(status).toEqual(200);
      });

      it("Data is object", async () => {
        expect(typeof data).toEqual('object');
      });

      it("id property equals 1", async () => {
        expect('id' in data && data.id === 1).toEqual(true);
      });

    });

    // card doesn't exist
    describe("card doesn't exist", () => {

      let data;
      let status

      beforeAll(async() => {
        const response = await axios.get(`${API_URL}/cards/100`);
        data = response.data;
        status = response.status;
      });

      // Should be 400??
      it("Status is 200", async () => {
        expect(status).toEqual(200);
      });

      it("Data is object", async () => {
        expect(typeof data).toEqual('object');
      });

      it("error property equals 'No card with that id'", async () => {
        expect('error' in data && data.error === "No card with that id").toEqual(true);
      });

    });

  });

});

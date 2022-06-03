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

  // // Ping
  // describe('Ping', () => {

  //   let data;
  //   let status

  //   beforeAll(async() => {
  //     const responce = await axios.get(`${API_URL}/sets/ping`);
  //     data = responce.data;
  //     status = responce.status;
  //   });

  //   it("Status is 200", async () => {
  //     expect(status).toEqual(200);
  //   });

  //   it("Data is object", async () => {
  //     expect(typeof data).toEqual('object');
  //   });

  //   it("success property equal true", async () => {
  //     expect('success' in data && data.success === true).toEqual(true);
  //   });

  // });
  
  // Get all sets
  // describe('Get all sets', () => {

  //   let data;
  //   let status

  //   beforeAll(async() => {
  //     const responce = await axios.get(`${API_URL}/sets`);
  //     data = responce.data;
  //     status = responce.status;
  //   });

  //   it("Status is 200", async () => {
  //     expect(status).toEqual(200);
  //   });

  //   it("Data is array", async () => {
  //     expect(Array.isArray(data)).toEqual(true);
  //   });

  // });
  
  // Get set by id
  // describe('Get set by id', () => {

  //   // Set exist
  //   describe('Set exist', () => {

  //     let data;
  //     let status
  
  //     beforeAll(async() => {
  //       const responce = await axios.get(`${API_URL}/sets/1`);
  //       data = responce.data;
  //       status = responce.status;
  //     });

  //     console.log('data: ', data);
  
  //     it("Status is 200", async () => {
  //       expect(status).toEqual(200);
  //     });

  //     it("Data is object", async () => {
  //       expect(typeof data).toEqual('object');
  //     });

  //     it("id property equals 1", async () => {
  //       expect('id' in data && data.id === 1).toEqual(true);
  //     });

  //   });

  //   // Set doesn't exist
  //   describe("Set doesn't exist", () => {

  //     let data;
  //     let status

  //     beforeAll(async() => {
  //       const responce = await axios.get(`${API_URL}/sets/10`);
  //       data = responce.data;
  //       status = responce.status;
  //     });

  //     // Should be 400??
  //     it("Status is 200", async () => {
  //       expect(status).toEqual(200);
  //     });

  //     it("Data is object", async () => {
  //       expect(typeof data).toEqual('object');
  //     });

  //     it("error property equals 'No set with that id'", async () => {
  //       expect('error' in data && data.error === "No set with that id").toEqual(true);
  //     });

  //   });

  // });


  // // Create set
  // describe('Create set', () => {

  //   let data;
  //   let status

  //   beforeAll(async() => {

  //     const response = await axios.post(`${API_URL}/sets`, {
  //       "name": "butteredBagel", 
  //       "name": "name 1", 
  //       "logo": "logog 1",
  //       "icon": "icon 1",
  //       "releaseDate": "realseDate 1",
  //       "cards": 11,
  //       "normalCards": 12,
  //       "secretCards": 13
  //     });

  //     data = response.data;
  //     status = response.status;
  //   });

    
  //   it("Status 201", async () => {  
  //     expect(status).toEqual(201);
  //   });

  //   it("Data is object", async () => {
  //     expect(typeof data).toEqual('object');
  //   });

  //   it("Data has id property", async () => {
  //     expect('id' in data).toEqual(true);
  //   });

  //   it("id property is a number", async () => {
  //     expect(typeof data.id).toEqual('number');
  //   });

  // });










    // Delete set
    // describe('Delete set', () => {

    //   let data;
    //   let status
  
    //   beforeAll(async() => {
  
    //     const response = await axios.delete(`${API_URL}/sets/2`);
  
    //     data = response.data;
    //     status = response.status;
    //   });
      
    //   it("Status 201", async () => {  
    //     expect(status).toEqual(201);
    //   });
  
    //   it("Data is object", async () => {
    //     expect(typeof data).toEqual('object');
    //   });
  
    //   it("Data has id property", async () => {
    //     expect('id' in data).toEqual(true);
    //   });
  
    // });

});
var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
const request = require('request');
const port = 3002;

describe('Server API behavior', () => {
    it('should response with restaraunt data that contains name, hours, and menus from Mongo', () => {
      // Make request to API
      request(`http://localhost:${port}/API/res/Bask`, (err, res, data) => {
        if (err) {
          return console.err(err);
        }
        data = JSON.parse(data);
        expect(data.length).toBe(1);
        expect(data[0].name).toBe('Bask');
        expect(typeof data[0].menus).toBe('object');
        expect(data[0].menus[0].exists()).toBe(true);
        expect(data[0].hours.exists()).toBe(true);
      });
    });


  });
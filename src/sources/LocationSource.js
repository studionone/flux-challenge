let mockData = [
  { id: 0, name: 'Abu Dhabi' },
  { id: 1, name: 'Berlin' },
  { id: 2, name: 'Bogota' },
  { id: 3, name: 'Buenos Aires' },
  { id: 4, name: 'Cairo' },
  { id: 5, name: 'Chicago' },
  { id: 6, name: 'Lima' },
  { id: 7, name: 'London' },
  { id: 8, name: 'Miami' },
  { id: 9, name: 'Moscow' },
  { id: 10, name: 'Mumbai' },
  { id: 11, name: 'Paris' },
  { id: 12, name: 'San Francisco' }
];

let LocationSource = {
    fetch: () => {
        // returning a Promise because that is what fetch does.
        return new Promise((resolve, reject) => {
            // simulate an asynchronous action where data is fetched on
            // a remote server somewhere
            setTimeout(() => {
                //resolve with some mock data
                resolve(mockData);
            }, 250)
        });
    }
};

export default LocationSource;

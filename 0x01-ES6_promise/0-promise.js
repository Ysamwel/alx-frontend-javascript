// Simulated API call function
function getResponseFromAPI() {
    // Return a new Promise
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation using setTimeout
      setTimeout(() => {
        // Example condition to either resolve or reject
        const success = true; // Change this to false to test rejection
  
        if (success) {
          // If operation is successful, resolve the promise with data
          resolve('API response data');
        } else {
          // If operation fails, reject the promise with an error
          reject(new Error('API request failed'));
        }
      }, 1000); // Simulate a 1-second delay
    });
  }
  
  // Usage
  getResponseFromAPI()
    .then(response => {
      console.log('Success:', response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
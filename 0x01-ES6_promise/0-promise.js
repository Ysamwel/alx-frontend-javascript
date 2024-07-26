function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation
      setTimeout(() => {
        const success = true; // Change to false to test rejection
  
        if (success) {
          resolve('API response data');
        } else {
          reject(new Error('API request failed'));
        }
      }, 1000); // 1-second delay to simulate API call
    });
  }
  
  // Export the function as the default export
  export default getResponseFromAPI;
  
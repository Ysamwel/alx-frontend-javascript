export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('Success'); // Using resolve to avoid the ESLint error
  });
}

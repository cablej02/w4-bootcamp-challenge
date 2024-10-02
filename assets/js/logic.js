// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function () {
  // Get the data from local storage
  const data = localStorage.getItem('blogData');

  // Check if the data is null
  if (data === null) {
    return [];
  }

  // Return the data as an array
  return JSON.parse(data);
}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function (data) {
  // Get the current data from local storage
  const curDataArr = readLocalStorage();

  // Add the new data to the array
  curDataArr.push(data);

  // Save the array to local storage
  localStorage.setItem('blogData', JSON.stringify(curDataArr));
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

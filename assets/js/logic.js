// Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleEl = document.querySelector('#toggle');
const bodyEl = document.querySelector('body');

let mode = localStorage.getItem('mode') || 'light';
handleDisplayToggle();

toggleEl.addEventListener('click',() =>{
  mode = mode === 'dark' ? 'light' : 'dark';
  handleDisplayToggle();
  localStorage.setItem('mode', mode);
});

function handleDisplayToggle(){
  bodyEl.setAttribute('class', mode);
  if (mode === 'dark'){
    document.querySelector(':root').style.setProperty('--circle-color', 'purple');
    toggleEl.textContent = '🌙';
  } else {
    document.querySelector(':root').style.setProperty('--circle-color', '#ffb100');
    toggleEl.textContent = '☀️';
  }
}

// Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
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


// Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
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

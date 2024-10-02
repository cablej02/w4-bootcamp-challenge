// Create a variable that selects the form element
const formEl = document.querySelector('#form');
const usernameEl = document.querySelector('#username');
const titleEl = document.querySelector('#title');
const contentEl = document.querySelector('#content');
const errorEl = document.querySelector('#error');
const submitEl = document.querySelector('#submit');



// Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const handleFormSubmit = function (event) {
    // Prevent the default action of submitting the form
    event.preventDefault();
  
    //TODO: uncomment everything below to take inputs and save once blog page is created
    // // Check if the form fields are empty
    // if (!usernameEl.value || !titleEl.value || !contentEl.value) {
    //     errorEl.textContent = 'Please complete the form.';
    //     return;
    // }

    // // Create an object to store the form values
    // const formObj = {
    //     username: usernameEl.value,
    //     title: titleEl.value,
    //     content: contentEl.value
    // };

    // // Store the form object in local storage
    // // TODO: Uncomment the following line to store the form object in local storage
    // storeLocalStorage(formObj);

    // Redirect to the blog page
    redirectPage('./blog.html');

}

// Add an event listener to the form on submit. Call the function to handle the form submission.
submitEl.addEventListener('click', handleFormSubmit);
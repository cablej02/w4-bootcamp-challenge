// Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backEl = document.querySelector('#back');

// Create a function that builds an element and appends it to the DOM
const addBlogPost = (blogPostObj) =>{
    // Create the elements
    const articleEl = document.createElement('article');
    const h2El = document.createElement('h2');
    const blockquoteEl = document.createElement('blockquote');
    const pEl = document.createElement('p');

    // Add the content to the elements
    h2El.textContent = blogPostObj.title;
    blockquoteEl.textContent = blogPostObj.content;
    pEl.textContent = `Posted by: ${blogPostObj.username}`;
    articleEl.classList.add('card');

    // Append the elements to the article element
    articleEl.append(h2El, blockquoteEl, pEl);

    // Append the article element to the main element
    mainEl.appendChild(articleEl);
}

// Create a function that handles the case where there are no blog posts to display
const handleNoPosts = () => {
    const h2El = document.createElement('h2');
    h2El.textContent = 'No Blog posts yet...';
    mainEl.appendChild(h2El);
}

// Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = () => {
    // Clear the main element
    mainEl.innerHTML = '';

    // Get the blog data from local storage
    const blogArr = readLocalStorage();

    // Check if the blog data is empty
    if (blogArr.length === 0){
        handleNoPosts();
        return;
    }

    // Loop through the blog data and add each post to the DOM
    blogArr.forEach((blogPostObj) => addBlogPost(blogPostObj));
}

// Call the `renderBlogList` function
renderBlogList();

// Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backEl.addEventListener('click', () => redirectPage('./index.html'));

//Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backEl = document.querySelector('#back');

//Create a function that builds an element and appends it to the DOM
const buildBlogPost = function (blogPostObj) {
    const articleEl = document.createElement('article');
    const h2El = document.createElement('h2');
    const blockquoteEl = document.createElement('blockquote');
    const pEl = document.createElement('p');

    h2El.textContent = blogPostObj.title;
    blockquoteEl.textContent = blogPostObj.content;
    pEl.textContent = `Posted by: ${blogPostObj.username}`;

    articleEl.append(h2El, blockquoteEl, pEl);
    articleEl.classList.add('card');

    mainEl.appendChild(articleEl);
}

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backEl.addEventListener('click', () => redirectPage('./index.html'));

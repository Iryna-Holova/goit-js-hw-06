const categories = document.querySelector('#categories');
console.log('Number of categories: ', categories.children.length);

const categoriesArray = document.querySelectorAll('li.item');
categoriesArray.forEach((category) => {
    console.log('Category: ', category.firstElementChild.textContent);
    console.log('Elements: ', category.lastElementChild.children.length);
});
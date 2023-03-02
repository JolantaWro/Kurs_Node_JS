const bookInfoElement = document.querySelector('.book-info');
const inputElement = document.querySelector('.form-control');
const form = document.querySelector('form');

// * https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}
// * 0747532699

const getBooks = (isbn) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`).then((resp) => {
        if (resp.ok && resp.status === 200) {
            return resp.json();
        }

        throw new Error('Cos poszlo nie tak');
    });
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    getBooks(inputElement.value).then((books) => {
        const [book] = books.items;

        const h2 = document.createElement('h2');
        h2.innerHTML = book.volumeInfo.title;

        bookInfoElement.appendChild(h2);
    });
});
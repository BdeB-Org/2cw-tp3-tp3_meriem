
const searchButton = document.getElementById('search-input');

searchButton.addEventListener('click', async () => {

    const searchValue = document.getElementById('search-input').value;

    const response = await fetch('data.sql');
    const data = await response.text();


    const books = await parseSql(data);

    const filteredBooks = books.filter((book) => {
        return book.title.includes(searchValue);
    });

    const resultDiv = document.getElementById('book-results');
    resultDiv.innerHTML = '';
    filteredBooks.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `<h2>${book.title}</h2><p>${book.author}</p><p>${book.description}</p>`;
        resultDiv.appendChild(bookDiv);
    });
});

async function parseSql(sql) {
    const db = new SQL.Database();
    db.exec(sql);
    const books = db.exec('SELECT * FROM books');
    return books;
}
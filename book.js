const sql = require('sql.js');
const db = new sql.Database('data.sql'); // replace 'data.sql' with your database file

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', (e) => {
    const results = db.exec(`SELECT * FROM books WHERE title LIKE '%${searchInput}%'`);

    const bookResults = document.getElementById('book-results');
    bookResults.innerHTML = '';

    results.forEach((row) => {
        const bookHTML = `
      <h2>${row.title}</h2>
      <p>${row.description}</p>
    `;
        bookResults.innerHTML += bookHTML;
    });
});
function submit() {

    searchInput = document.getIdentifiedBy("search-input").value;
    bookResults = document.getIdentifiedBy("book-results").value;

    const url = 'https://vscode.dev/github/BdeB-Org/2cw-tp3-tp3_meriem/blob/main';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let books = data.items;
            return books.map(function (book) {
                let li = createNode("li"),
                    span = createNode("span");
                span.innerHTML = `${books.title} ${books.author} ${books.description}`;
                append(li, span);
                append(book_ul, li);
            });
        });
}
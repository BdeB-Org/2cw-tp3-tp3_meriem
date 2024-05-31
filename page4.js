function submit() {

    searchInput = document.getIdentifiedBy("search-input").value;
    bookResults = document.getIdentifiedBy("book-results").value;

    function fetchData(title, author, description) {
        $.ajax({
            method: 'GET',
            url: 'https://github.com/BdeB-Org/2cw-tp3-tp3_meriem/blob/main/data.sql',
            contentType: 'application/sql',
            success: function (result) {
                console.log(result);

                result(books);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }
    fetch(url)
        .then((resp) => resp.sql())
        .then(function (data) {
            let books = data.items;
            return books.map(function (books) {
                let li = createNode("li"),
                    span = createNode("span");
                span.innerHTML = `${books.title} ${books.author} ${books.description}`;
                append(li, span);
                append(book_ul, li);
            });
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });

}




const searchButton = document.getElementById('search-input');

searchButton.addEventListener('click', async () => {

    const searchValue = document.getElementById('search-input').value;

    const response = await fetch('data.sql');
    const data = await response.text();

    const countries = await parseSql(data);

    const filteredCountries = countries.filter((country) => {
        return country.name.includes(searchValue);
    });


    const resultDiv = document.getElementById('country-results');
    resultDiv.innerHTML = '';
    filteredCountries.forEach((country) => {
        const countryDiv = document.createElement('div');
        countryDiv.innerHTML = `<h2>${country.name}</h2><p>Capital : ${country.capital}</p><p>Population : ${country.population}</p>`;
        resultDiv.appendChild(countryDiv);
    });
});

async function parseSql(sql) {
    const db = new SQL.Database();
    db.exec(sql);
    const countries = db.exec('SELECT * FROM countries');
    return countries;
}
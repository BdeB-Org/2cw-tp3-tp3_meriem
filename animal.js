const searchButton = document.getElementById('search-input');


searchButton.addEventListener('click', async () => {
    const searchValue = document.getElementById('search-input').value;

    const response = await fetch('data.sql');
    const data = await response.text();

    const animals = await parseSql(data);

    const filteredAnimals = animals.filter((animal) => {
        return animal.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    const resultDiv = document.getElementById('animal-results');
    resultDiv.innerHTML = '';
    filteredAnimals.forEach((animal) => {
        const animalDiv = document.createElement('div');
        animalDiv.innerHTML = `<h2>${animal.name}</h2><p>${animal.description}</p>`;
        resultDiv.appendChild(animalDiv);
    });
});


async function parseSql(sql) {
    const db = new SQL.Database();
    db.exec(sql);
    const animals = db.exec('SELECT * FROM animals');
    return animals;
}
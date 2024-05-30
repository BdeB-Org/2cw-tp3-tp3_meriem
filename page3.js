document.getElementById('animal-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const animalName = document.getElementById('animal-name').value;
    fetchData('animal', animalName);
});

document.getElementById('plant-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const plantName = document.getElementById('plant-name').value;
    fetchData('plant', plantName);
});

document.getElementById('capital-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const countryName = document.getElementById('country-name').value;
    fetchData('capital', countryName);
});

function fetchData(type, name) {
    const db = new SQL.Database();
    fetch('data.sql')
        .then(response => response.text())
        .then(sql => {
            db.run(sql);
            let query;
            if (type === 'animal') {
                query = `SELECT description FROM animals WHERE name = '${name}'`;
            } else if (type === 'plant') {
                query = `SELECT description FROM plants WHERE name = '${name}'`;
            } else if (type === 'capital') {
                query = `SELECT description FROM capitals WHERE country = '${name}'`;
            }
            const result = db.exec(query);
            document.getElementById('results').innerText = result[0] ? result[0].values[0] : 'Aucun résultat trouvé';
        })
        .catch(error => console.error('Erreur:', error));
}


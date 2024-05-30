function animalRecherche() {
    const animal = document.getElementById("userResponse").value;
    const resultat = document.getElementById("resultatAnimal");
    resultat.innerHTML = `<h2>Resultats pour : ${animal}</h2><p> Informations sur l'animal $ {animal}...</p>`;

    const animalForm = document.getElementById('animalForm');
    if (animalForm) {
        animalForm.addEventListener('submit', searchAnimal);
        searchDatabase('animals', 'userResponse', 'resultatAnimal')

    }
}


function submit() {
    const animals = [
        { name: 'Lion', description: 'The lion is the king of the jungle', habitat: 'Savannah' },
        { name: 'Elephant', description: 'The elephant is the largest land animal', habitat: 'Forest' },
        { name: 'Giraffe', description: 'The giraffe is the tallest mammal', habitat: 'Savannah' },
        { name: 'Zebra', description: 'The zebra is a black and white striped horse', habitat: 'Grassland' },
        { name: 'Monkey', description: 'The monkey is a primate that lives in trees', habitat: 'Rainforest' }
    ];

    const animalInput = document.getElementById('animal-name');

    if (animalInput == animals.name) {
        resultsDiv.innerHTML = `
        <h2>${selectedAnimal.name}</h2>
        <p>${selectedAnimal.description}</p>
        <p>${selectedAnimal.habitat}</p>
      `;
    } else if (animalInput != animals.name) {
        resultsDiv.innerHTML = 'No animal found with that name';
    }
}

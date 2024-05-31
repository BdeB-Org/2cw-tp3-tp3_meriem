-- Table des animaux
CREATE TABLE animals (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT
);

INSERT INTO animals (name, description) VALUES
('Lion', 'Le lion est un grand félin.'),
('Éléphant', 'L''éléphant est le plus grand animal terrestre.'),
('Panda', 'Le panda est un mammifère de la famille des Ursidés.');

-- Table des livres
CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    description TEXT
);

INSERT INTO books (title, author, description) VALUES
('Harry Potter', 'J.K. Rowling', 'Un jeune sorcier découvre qu''il est l''élu pour vaincre le plus grand mage noir.'),
('Le Seigneur des Anneaux', 'J.R.R. Tolkien', 'Un hobbit entreprend un voyage pour détruire un anneau maléfique.'),
('Le Petit Prince', 'Antoine de Saint-Exupéry', 'Un jeune prince voyage à travers les étoiles et découvre la beauté de l''amitié.');

-- Table des pays
CREATE TABLE countries (
    id INTEGER PRIMARY KEY,
    name TEXT,
    capital TEXT,
    population INTEGER
);

INSERT INTO countries (name, capital, population) VALUES
('France', 'Paris', 67022000),
('Germany', 'Berlin', 83122889),
('Italy', 'Rome', 60483973);

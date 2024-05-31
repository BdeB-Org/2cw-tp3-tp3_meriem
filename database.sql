-- Table des animaux
CREATE TABLE animals (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT
);

INSERT INTO animals (name, description) VALUES('Lion', 'Le lion est un grand f�lin.'),
INSERT INTO animals (name, description) VALUES('�l�phant', 'L''�l�phant est le plus grand animal terrestre.'),
INSERT INTO animals (name, description) VALUES('Panda', 'Le panda est un mammif�re de la famille des Ursid�s.');

-- Table des livres
CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    description TEXT
);

INSERT INTO books (title, author, description) VALUES('Harry Potter', 'J.K. Rowling', 'Un jeune sorcier d�couvre qu''il est l''�lu pour vaincre le plus grand mage noir.'),
INSERT INTO books (title, author, description) VALUES('Le Seigneur des Anneaux', 'J.R.R. Tolkien', 'Un hobbit entreprend un voyage pour d�truire un anneau mal�fique.'),
INSERT INTO books (title, author, description) VALUES('Le Petit Prince', 'Antoine de Saint-Exup�ry', 'Un jeune prince voyage � travers les �toiles et d�couvre la beaut� de l''amiti�.');

-- Table des pays
CREATE TABLE countries (
    id INTEGER PRIMARY KEY,
    name TEXT,
    capital TEXT,
    population INTEGER
);

INSERT INTO countries (name, capital, population) VALUES('France', 'Paris', 67022000),
INSERT INTO countries (name, capital, population) VALUES('Germany', 'Berlin', 83122889),
INSERT INTO countries (name, capital, population) VALUES('Italy', 'Rome', 60483973);

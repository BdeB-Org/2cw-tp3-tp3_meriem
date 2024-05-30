
CREATE TABLE animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
);


CREATE TABLE plants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE capitals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    country TEXT NOT NULL,
    capital TEXT NOT NULL,
    description TEXT
);

INSERT INTO animals (name, description) VALUES
('Lion', 'Le lion est un grand félin carnivore.'),
('Elephant', 'L’éléphant est le plus grand animal terrestre.');

INSERT INTO plants (name, description) VALUES
('Rose', 'La rose est une fleur très populaire.'),
('Tulip', 'La tulipe est une fleur à bulbe.');

INSERT INTO capitals (country, capital, description) VALUES
('France', 'Paris', 'Paris est la capitale de la France.'),
('Japan', 'Tokyo', 'Tokyo est la capitale du Japon.');

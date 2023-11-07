\c movies_dev;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    year_of_release INTEGER,
    genres TEXT[],
    description TEXT,
    rating TEXT,
    runtime INTEGER
);
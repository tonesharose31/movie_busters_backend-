# Movie Busters Backend

Welcome to the Movie Busters backend! This repository contains the server-side code for the Movie Busters application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Running the Server](#running-the-server)
- [Endpoints](#endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Movie Busters is a movie review application where users can explore and review their favorite movies.

## Features

- User authentication and authorization
- CRUD operations for movies and reviews
- ...

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tonesharose31/movie-busters-backend.git
   cd movie-busters-backend


Install dependencies:
npm install


Create a PostgreSQL database.

Update the database configuration in .env:
DATABASE_URL=postgres://username:password@localhost:5432/movies

Start the server
npm start
Visit http://localhost:3000 in your browser to access the server.


GET /movies: Get a list of all movies.

GET /movies/:id: Get details for a specific movie.

POST /movies: Create a new movie.

PUT /movies/:id: Update details for a specific movie.

DELETE /movies/:id: Delete a specific movie.

GET /reviews: Get a list of all reviews.

GET /reviews/:id: Get details for a specific review.

POST /reviews: Create a new review.

PUT /reviews/:id: Update details for a specific review.

DELETE /reviews/:id: Delete a specific review.

Database Schema

The database schema for this project can be found in the db/schema.sql file.

Contributing
Contributions are welcome! Please check the Contribution Guidelines for more details.

License
This project is licensed under the MIT License


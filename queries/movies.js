const db  = require("../db/dbConfig");

const getAllMovies = async () => {
  try {
    const getAllMovies = await db.any("SELECT * FROM movies");
    return allMovies
  } catch(error) {
    return error
  }
}

const getOneMovie = async (id) => {
  try {
    const oneMovie = await db.one("SELECT * FROM movies WHERE id =$1", id)
    return oneMovie
  } catch(error) {
    return error
  }
};

const createMovie = async (movie) => {
  try {
    const createdMovie = await db.one("INSERT INTO movies", [movie.name, movie.year, movie.genre, movie.is_favorite])
    // edit this line ^^^^^^^
    return createdMovie
  } catch (error) {
    return error
  }
}

const deleteMovie = async (id) => {
  try {
    const deletedMovie = await db.one("DELETE from movies WHERE id = $1 RETURNING *", id)
    // edit this line ^^^^^^^^^^
    return deletedMovie
  } catch(error) {
    return error
  }
};

const updateMovie = async (id, movie) => {
  try {
    const { title, year, genre, is_favorite } = movie;
    const updatedMovie = await db.one("UPDATE movies SET title=$1, year=$2, genre=$3, is_favorite=$4", [title,year,genre,is_favorite]);
    // edit this line ^^^^^^^^^^^^
    return updatedMovie 
  } catch(error) {
    return error
  }
};

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  deleteMovie,
  updateMovie
}
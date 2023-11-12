const db  = require("../db/dbConfig");

const getAllMovies = async () => {
  try {
  const allMovies = await db.any("SELECT * FROM movies");
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
    const createdMovie = await db.one("INSERT INTO movies", [movie.title, movie.year_of_release, movie.genres, movie.description, movie.rating, movie.runtime])
    return createdMovie
  } catch (error) {
    return error
  }
}

const deleteMovie = async (id) => {
  try {
    const deletedMovie = await db.one("DELETE from movies WHERE id = $1 RETURNING *", id)
    return deletedMovie
  } catch(error) {
    return error
  }
};

const updateMovie = async (id, movie) => {
  try {
    const { title, year_of_release, genres, description, rating, runtime } = movie;
    const updatedMovie = await db.one("UPDATE movies SET title=$1, year_of_release=$2, genre=$3, description=$4, rating=$5, runtime=$6,cis_favorite=$7", [title,year_of_release,genres, description, rating, runtime]);
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
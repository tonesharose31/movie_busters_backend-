const express = require("express");
const {
  getAllMovies,
  getOneMovie,
  createMovie,
  deleteMovie,
  updateMovie,
} = require("../queries/movies.js");

const {
  checkTitle,
  checkDescription,
  checkGenres,
  checkYear,
  checkRating,
  checkRuntime,
} = require("../validations/checkMovies.js");

const reviewsController = require("./reviewsController.js");

const movies = express.Router();

movies.use("/:movie_id/reviews", reviewsController);

movies.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneMovie = await getOneMovie(id);
  if (oneMovie) {
    res.json(oneMovie);
  } else {
    res.status(404).json({ error: "Movie not found!" });
  }
});

movies.get("/", async (req, res) => {
  const allMovies = await getAllMovies();
  if (allMovies[0]) {
    res.status(200).json({ success: true, data: { payload: allMovies } });
  } else {
    res
      .status(500)
      .json({
        success: false,
        data: { error: "Server Error - we didn't do it!" },
      });
  }
});

movies.post(
  "/",
  checkTitle,
  checkDescription,
  checkGenres,
  checkYear,
  checkRating,
  checkRuntime,
  async (req, res) => {
    try {
      const createdMovie = await createMovie(req.body);
      res.json(createdMovie);
    } catch (error) {
      res.status(400).json({ error: "Error creating a movie" });
    }
  }
);

movies.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await deleteMovie(id);
    if (deletedMovie) {
      res.status(200).json({ success: true, payload: { data: deletedMovie } });
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        data: { error: "Server Error - we didn't do it!" },
      });
  }
});

movies.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedMovie = await updateMovie(id, req.body);
  if (updatedMovie.id) {
    res.status(200).json(updatedMovie);
  } else {
    res.status(404).json({ error: "No movie found with that ID" });
  }
});

module.exports = movies;

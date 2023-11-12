const { checkTitle, checkDescription} = require('../validations/checkMovies');
const express = require("express");
const { 
    getAllMovies, 
    getOneMovie, 
    createMovie, 
    deleteMovie, 
    updateMovie
} = require("../queries/movies.js");

const reviewsController = require("./reviewsController.js");
 
// const { id } = require("process");

const movies = express.Router();

movies.use("/:movie_id/reviews", reviewsController);



movies.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const oneMovie = await getOneMovie(id);
        if (oneMovie) {
            res.status(200).json(oneMovie);
        } else {
            res.status(404).json({ error: "Movie not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});


movies.get("/", async (req, res) => {
    const allMovies = await getAllMovies();
    console.log(allMovies)
    if (allMovies[0]) {
      res.status(200).json({ succes: true, data: { payload: allMovies } });
    } else {
      res.status(500).json({ success: false, data: { error: "Server Error!" } });
    }
  });


movies.post("/", checkTitle, async (req, res) => {
    try {
        const movieData = {
            title: req.body.title,
            year_of_release: req.body.year_of_release,
            genres: req.body.genres,
            description: req.body.description,
            rating: req.body.rating,
            runtime: req.body.runtime
        };

        const createdMovie = await createMovie(movieData);

        res.status(201).json(createdMovie);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Error creating a movie" });
    }
});



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
        console.error(error);
        res.status(500).json({ error: "An error occurred while processing the request" });
    }
});

    

movies.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMovie = await updateMovie(id, req.body);
        if (updatedMovie.id) {
            res.status(200).json(updatedMovie);
        } else {
            res.status(404).json({ error: "No movie found with that ID" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while processing the request" });
    }
});


module.exports = movies;
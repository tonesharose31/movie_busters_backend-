const express = require("express");
const reviews = express.Router({ mergeParams: true });

const { getOneMovie } = require("../queries/movies");
const {
  getAllReviews,
  getOneReview,
  deleteReview,
  createReview,
  updateReview,
} = require("../queries/reviews");

reviews.get("/", async (req, res) => {
  const { movie_id } = req.params;
  try {
    const movie = await getOneMovie(movie_id);
    const allReviews = await getAllReviews(movie_id);
    res.json({ ...movie, allReviews });
  } catch (error) {
    res.json(error);
  }
});

reviews.get("/:review_id", async (req, res) => {
  const { review_id, movie_id } = req.params;
  try {
    const review = await getOneReview(review_id);
    const allMovies = await getOneMovie(movie_id);
    if (review.id) {
      res.json({ ...allMovies, review });
    }
  } catch (error) {
    res.json(error);
  }
});

reviews.post("/", async (req, res) => {
  try {
    const { movie_id } = req.params;
    const createdReview = await createReview(movie_id, req.body);
    res.json(createdReview);
  } catch (error) {
    res.status(400).json({ error: "DID NOT POST" });
  }
});

reviews.delete("/:review_id", async (req, res) => {
  try {
    const { review_id } = req.params;
    const deletedReview = await deleteReview(review_id);

    if (deletedReview) {
      res.status(200).json({
        success: true,
        payload: {
          data: deletedReview,
        },
      });
    } else {
      res.status(404).json("No reviews found!!");
    }
  } catch (error) {
    res.send(error);
  }
});

reviews.put("/:id", async (req, res) => {
  const { id, movie_id } = req.params;
  const updatedReview = await updateReview({ movie_id, id, ...req.body });
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(400).json("Review is not here!!");
  }
});

module.exports = reviews;

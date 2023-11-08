const db = require("../db/dbConfig");

const getAllReviews = async (movies_id) => {
  try { 
    const allReviews = await db.any("SELECT * FROM reviews WHERE movie_id=$1",
    movie_id
    );
    return allReviews
  } catch(error) {
    return error
  }
}

const getOneReview = async (id) => {
  try {
    const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return oneReview
  } catch(error) {
    return error
  }
}

const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one("DELETE from reviews WHERE id = $1 RETURNING *",
    id
    )
    return deletedReview
  } catch (error) {
    return error
  }
}

const createReview = async (movie_id, review) => {
  try {
    const { reviewer, rating, content, title } = review;
    const createdReview = await db.one(`INSERT INTO reviews (reviewer, rating, content, title, movie_id)
    VALUES
    ($1, $2, $3, $4, $5) RETURNING *`,
    [reviewer, rating, content, title, movie_id]
    );
    return createdReview
  } catch(error) {
    return error
  }
}

const updateReview = async (review) => {
  try {
    const { reviewer, rating, content, title, id, movie_id } = review;
    const updatedReview = await db.one(
      `UPDATE reviews SET
      reviewer=$1, rating=$2, content=$3, title=$4,
      movie_id=$5 WHERE id=$6
      RETURNING *`,
      [reviewer, rating, content, title, movie_id, id]
    );
    return updatedReview
  } catch(error) {
    return error
  }
}

module.exports = {
  getAllReviews,
  getOneReview,
  deleteReview,
  createReview,
  updateReview
}
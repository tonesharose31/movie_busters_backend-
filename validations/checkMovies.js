
function checkTitle(req, res, next) {
  const { title } = req.body;
  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
  }
  next();
}

function checkDescription(req, res, next) {
  const { description } = req.body;

  if(typeof description != 'string' || description.trim() === ''){
    return res.status(400).json({error: 'Description is required and must be a non-empty string'});
  }
  next();
}

const validGenres = [ "Action", "Comedy", "Drama", "Horror", "Science Fiction", "Fantasy", "Adventure", "Romance", "Mystery", "Thriller", "Animation", "Documentary", "Paranormal", "Musical"];

function checkGenres(req, res, next) {
  const { genres } = req.body;

  if(!Array.isArray(genres)) {
    return res.status(400).json({error: 'Genres must be provided as an array'});
  }

  for (const genre of genres) {
    if (!validGenres.includes(genre)) {
      return res.status(400).json({ error: `${genre} is not a valid genre` });
    }
  }
  next();
}

function checkYear(req, res, next) {
  const { year_of_release } = req.body;

  if (!year_of_release || typeof year_of_release !== 'number' || year_of_release < 1900 || year_of_release > new Date().getFullYear()) {
    return res.status(400).json({ error: 'Year of release is required and must be a valid year' });
  }
  next();
}


function checkRating(req, res, next) {
  const { rating } = req.body;

  const ratingRegex = /^[0-9](\.[0-9])?$/;

  if (!rating || !ratingRegex.test(rating)) {
    return res.status(400).json({ error: 'Rating is required and must be a valid format' });
  }
  next();
}

function checkRuntime(req, res, next) {
  const { runtime } = req.body;

  if (!runtime || typeof runtime !== 'number' || runtime <= 0) {
    return res.status(400).json({ error: 'Runtime is required and must be a positive number' });
  }
  next();
}

module.exports = {
  checkTitle,
  checkDescription,
  checkGenres,
  checkYear,
  checkRating,
  checkRuntime,
}
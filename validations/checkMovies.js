
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

const validGenres = [ "Action", "Comedy", "Drama", "Horror", "Science Fiction", "Fantasy", "Adventure", "Romance", "Mystery", "Thriller", "Animation", "Documentary", "paranormal"];

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
module.exports = {
  checkTitle,
  checkDescription
}

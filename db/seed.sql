\c movies_dev;

INSERT INTO users (username, email, password_hash)
VALUES
('user1', 'user1@example.com', 'hashed_password1'),
('user2', 'user2@example.com', 'hashed_password2');

INSERT INTO movies (title, year_of_release, genres, description, rating, runtime)
VALUES
('The Shawshank Redemption', 1994, '{Drama}', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 9.3, 142),
('Inception', 2010, '{Action, Sci-Fi}', 'A thief who enters the dreams of others to steal their secrets.', 8.8, 148),
('Forrest Gump', 1994, '{ Drama, Romance}', 'The life journey of a man with low intelligence who rose to become a football legend.', 8.8, 142),
('The Matrix',1999, '{Action, Sci-Fi}', 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.', 8.7,136), 
('The Conjuring', 2013, '{Horror, Paranormal}', 'Research uncovers a harrowing history of the house, linking it to accused witch Bathsheba Sherman, who, in 1863, sacrificed her infant to the devil, committed suicide, and left a legacy of murders and suicides on the property.', 7.5, 112);


INSERT INTO reviews (movie_id, user_id, rating, comment) 
VALUES
  (1, 1, 5, 'Absolutely loved it! The storyline and acting were outstanding.'),
  (1, 2, 4, 'A classic film with a powerful message. Enjoyed every moment.'),
  (2, 1, 4, 'Mind-blowing! The concept of dreams within dreams was fascinating.'),
  (2, 3, 5, 'Inception is a masterpiece. Christopher Nolan''s brilliance shines through.');

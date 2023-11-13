const { insertUserWithHashedPassword } = require('../queries/users');

const bcrypt = require('bcrypt');

// Hash passwords using bcrypt
const password1 = 'password_for_user1';
const password2 = 'password_for_user2';

bcrypt.hash(password1, 10, function(err, hash1) {
  bcrypt.hash(password2, 10, function(err, hash2) {

    console.log(`INSERT INTO users (username, email, password_hash) VALUES ('user1', 'user1@example.com', '${hash1}');`);
    console.log(`INSERT INTO users (username, email, password_hash) VALUES ('user2', 'user2@example.com', '${hash2}');`);
  });
});

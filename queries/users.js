const bcrypt = require('bcrypt');

// Function to hash a password using bcrypt
const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

// Function to insert a user with a hashed password
const insertUserWithHashedPassword = async (username, email, password) => {
  const hashedPassword = await hashPassword(password);

  return `INSERT INTO users (username, email, password_hash) VALUES ('${username}', '${email}', '${hashedPassword}');`;
};

module.exports = {
  insertUserWithHashedPassword,
};

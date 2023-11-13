// src/queries/userQueries.js
const bcrypt = require('bcrypt');

// Function to hash a password using bcrypt
const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};


const insertUserWithHashedPassword = async (username, email, password) => {
  try {
    const hashedPassword = await hashPassword(password);

  
    return `INSERT INTO users (username, email, password_hash) VALUES ('${username}', '${email}', '${hashedPassword}');`;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
};

module.exports = {
  insertUserWithHashedPassword,
};


const fs = require('fs');
const { insertUserWithHashedPassword } = require('../queries/users');


// Hash passwords using bcrypt
const password1 = 'password_for_user1';
const password2 = 'password_for_user2';

// Create user insertion queries with hashed passwords
async function generateQueries() {
    try {
const userQuery1 = insertUserWithHashedPassword('user1', 'user1@example.com', password1);
const userQuery2 = insertUserWithHashedPassword('user2', 'user2@example.com', password2);

fs.writeFileSync('db/seed.sql', `${userQuery1}\n${userQuery2}\n`, { flag: 'w' });
} catch (error) {
    console.error('Error generating queries:', error);
  }
}
generateQueries();
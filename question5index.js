const express = require('express');
const User = require('./models/User'); // Import the User model

const app = express();
const port = 3000;

// Route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll(); // Fetch all users from the database
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

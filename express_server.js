const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3001;

// Enable CORS for the frontend running on localhost:3001
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xxxxxxxx',
  database: 'childcare_db'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});


// Routes for students
app.get('/students', (req, res) => {
  db.query('SELECT * FROM children', (err, results) => {
    if (err) {
      console.error('Error fetching artists:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});


// Routes for students
app.get('/daily', (req, res) => {
  db.query('SELECT * FROM dailyreports', (err, results) => {
    if (err) {
      console.error('Error fetching artists:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});


// Routes for students
app.get('/accidents', (req, res) => {
  db.query('SELECT * FROM accidentreports', (err, results) => {
    if (err) {
      console.error('Error fetching artists:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
``
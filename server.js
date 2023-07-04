// Import the necessary modules
const express = require('express');
const session = require('express-session');
const cors = require('cors');

// Create a new Express application
const app = express();

// Add request parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add cookie-based session middleware
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// Add CORS middleware
app.use(cors());

// Define a simple GET route for testing
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define a route for user login
app.post('/login', (req, res) => {
    // Retrieve the user credentials from the request body
    const { username, password } = req.body;
  
    // Validate the username and password using regular expressions
    const usernameRegex = /^[a-zA-Z0-9]{6,12}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0][1][2][3][4][5][6][7][8][9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
  
    if (!usernameRegex.test(username) || !passwordRegex.test(password)) {
      // If the username or password is invalid, return a JSON response indicating that the login was unsuccessful
      res.json({ success: false });
      return;
    }
  
    // Authenticate the user credentials against a database or a JSON file
    const user = authenticateUser(username, password);
  
    if (user) {
      // If the user credentials are valid, create a new session and set the user ID as a session variable
      req.session.userId = user.id;
      res.json({ success: true });
    } else {
      // If the user credentials are invalid, return a JSON response indicating that the login was unsuccessful
      res.json({ success: false });
    }
  });

// Start the Express application and listen on port 8080
app.listen(8080, () => {
  console.log('Server started on port 8080');
});
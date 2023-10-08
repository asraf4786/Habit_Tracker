const express = require('express');
const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
const habitRoutes = require('./routes/habitRoutes');


// Create an instance of the Express app
const app = express();
//Setting EJS as view engine and content rendering and encoding
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Connect to the MongoDB database
mongoose.connect(`mongodb+srv://asrafansari4786:Asraf@2001@cluster0.uaafd3h.mongodb.net/Habit_Tracker_DB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Replace <username> here asrafansari4786 and <password> here Asraf@2001 with your actual MongoDB credentials

// Routes
app.use('/', habitRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

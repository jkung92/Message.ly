/** Express app for message.ly. */

<<<<<<< HEAD

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
=======
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b
const app = express();

// allow both form-encoded and json body parsing
app.use(express.json());
<<<<<<< HEAD
app.use(bodyParser.urlencoded({extended: true}));
=======
app.use(bodyParser.urlencoded({ extended: true }));
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b

// allow connections to all routes from any browser
app.use(cors());

/** routes */

<<<<<<< HEAD
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const messageRoutes = require("./routes/messages");

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/messages", messageRoutes);
=======
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const messageRoutes = require('./routes/messages');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/messages', messageRoutes);
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b

/** 404 handler */

app.use(function(req, res, next) {
<<<<<<< HEAD
  const err = new Error("Not Found");
=======
  const err = new Error('Not Found');
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b
  err.status = 404;

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err.stack);

  return res.json({
<<<<<<< HEAD
    error: err,
=======
    // error: err,
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b
    message: err.message
  });
});

<<<<<<< HEAD

=======
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b
module.exports = app;

const path = require("path");
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const account = require('./routes/account');
const about = require('./routes/about');
const categories = require('./routes/categories');
const post = require('./routes/post');
var db = require('./config/database');

//Stuff for deployment
app.use(express.static(path.join(__dirname, "build")));

if (process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

//Routers
app.use('/api/account', account);

app.use('/api/about', about);

app.use('/api/categories', categories);

app.use('/api/posts', post);

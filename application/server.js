const path = require("path");
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const account = require('./routes/account');
const about = require('./routes/about');
const categories = require('./routes/categories')
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

//HOME PAGE ROUTE
app.get("/api/homepage", (req, res) => {
  let query = 'SELECT Register_User.username, Register_User.email, \
              Register_User.password, Register_User.dob, Register_User.address, \
              Register_User.zipCode FROM Rently.Register_User; \
              SELECT Equipment_Category.description \
              FROM Rently.Equipment_Category;';

  //Make query for data
  db.query(query)
  .then(([results, fields]) => {
    console.log(results);

    //Send the data to the frontend
    let userData = results[0][0];
    let categoryData = results[1][0];

    res.send({
      username: userData.username,
      email: userData.email,
      password: userData.password,
      dob: userData.dob,
      address: userData.address,
      zipCode: userData.zipCode,
      equipmentCategory: categoryData.description
    });
  })
  .catch((err) => {
    console.error('error connecting: ' + err.stack);
    next(err);
  })

});


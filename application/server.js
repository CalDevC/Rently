const path = require("path");
const express = require('express');
const app = express();
const mysql = require('mysql2');
const port = process.env.PORT || 5000;
const account = require('./routes/account');

const connection = mysql.createConnection({
  host     : 'database-1.c0xp0u07woyj.us-west-1.rds.amazonaws.com',
  user     : 'admin',
  password : '918330561',
  debug: false,
  multipleStatements: true
});

app.use(express.static(path.join(__dirname, "build")));

if(process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
   	res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/api/account', account);

// ABOUT PAGE ROUTES
app.get("/api/chase-alexander", (req, res) => {
  res.send({
    name: "Chase Alexander",
    role: "Team lead, full stack support",
    img: "images/Chase.jpg",
  });
});

app.get("/api/yuhang-lee", (req, res) => {
  res.send({
    name: "YuHang Lee",
    role: "Frontend Lead",
    img: "images/Member1.jpg",
  });
});

app.get("/api/chucheng-situ", (req, res) => {
  res.send({
    name: "Chu Cheng Situ",
    role: "Backend Lead",
    img: "images/Chu.jpg",
  });
});

app.get("/api/benjamin-mccullough", (req, res) => {
  res.send({
    name: "Benjamin McCullough",
    role: "GitHub Master",
    img: "images/BensPic.jpg",
  });
});

app.get("/api/lauren-barer", (req, res) => {
  res.send({
    name: "Lauren Barer",
    role: "Scrum Master, Cloud",
    img: "images/Lauren.jpg",
  });
});

//HOME PAGE ROUTE
app.get("/api/homepage", (req, res) => {
  
  //Make connection to db
  connection.connect( function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  let query = 'SELECT Register_User.username, Register_User.email, \
                   Register_User.password, Register_User.dob, Register_User.address, \
                   Register_User.zipCode FROM Rently.Register_User; \
                   SELECT Equipment_Category.description \
                   FROM Rently.Equipment_Category;';

  //Make query for data
  connection.query(query, function (error, results, fields){
    if (error) throw error;
    console.log(results);
    //Send the data to the frontend
    let userData = results[0][0];
    let categoryData = results[1][0];
    console.log(categoryData);

    res.send({
      username: userData.username,
      email: userData.email,
      password: userData.password,
      dob: userData.dob,
      address: userData.address,
      zipCode: userData.zipCode,
      equipmentCategory: categoryData.description
    });

  });

});

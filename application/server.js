const path = require("path");
const express = require('express');
const app = express();
const mysql = require('mysql');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

if (process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Create Database Connection
const db = mysql.createConnection({
  host     : 'database-1.c0xp0u07woyj.us-west-1.rds.amazonaws.com',
  user     : 'admin',
  password : '918330561',
  database : 'database1',
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET routes
app.get('/api/chase-alexander', (req, res) => {
  res.send({
    name: "Chase Alexander",
    role: "Team lead, full stack support",
    img: "images/Chase.jpg"
  });
});

app.get('/api/yuhang-lee', (req, res) => {
  res.send({
    name: "YuHang Lee",
    role: "Frontend Lead",
    img: "images/Member1.jpg"
  });
});

app.get('/api/chucheng-situ', (req, res) => {
  res.send({
    name: "Chu Cheng Situ",
    role: "Backend Lead",
    img: "images/Chu.jpg"
  });
});

app.get('/api/benjamin-mccullough', (req, res) => {
  res.send({
    name: "Benjamin McCullough",
    role: "GitHub Master",
    img: "images/BensPic.jpg"
  });
});

app.get('/api/lauren-barer', (req, res) => {
  res.send({
    name: "Lauren Barer",
    role: "Scrum Master, Cloud",
    img: "images/Lauren.jpg"
  });
});

app.get('/api/homepage', (req, res) => {
  //TODO: Make DB query
  //send back data
  res.send({
    username: "example"
  })
});
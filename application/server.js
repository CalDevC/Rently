const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

<<<<<<< HEAD
if (process.env.NODE_ENV === "production") {
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
=======
if (process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
>>>>>>> 0f4dc6eda94426714d64da7690cddd480a94aa71
  });
}

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET routes
<<<<<<< HEAD
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

app.get("/api/homepage", (req, res) => {
  res.send({
    username: "example",
    password: "password",
    equipmentCategory: "outdoor equipment",
    dob: "dob",
    address: "address",
  });
});
=======
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
>>>>>>> 0f4dc6eda94426714d64da7690cddd480a94aa71

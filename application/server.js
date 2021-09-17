const path = require("path");
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

if(process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
   	res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET routes
app.get('/api/chase-alexander', (req,res) => {
    res.send({
        name: "Chase Alexander",
        role: "Team lead, full stack support",
        img: "images/Chase.jpg"
    })
})

app.get('/api/yuhang-lee', (req,res) => {
    res.send({
        name: "YuHang Lee",
        role: "Frontend Lead",
        img: "images/Member1.jpg"
    })
})

app.get('/api/chucheng-situ', (req,res) => {
    res.send({
        name: "Chu Cheng Situ",
        role: "Backend Lead",
        img: "images/Chu.jpg"
    })
})

app.get('/api/benjamin-mccullough', (req,res) => {
    res.send({
        name: "Benjamin McCullough",
        role: "GitHub Master",
        img: "images/BensPic.jpg"
    })
})

app.get('/api/lauren-barer', (req,res) => {
    res.send({
        name: "Lauren Barer",
        role: "Scrum Master, Cloud",
        img: "images/Lauren.jpg"
    })
})
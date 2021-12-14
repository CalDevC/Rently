const express = require('express');
const router = express.Router();
const db = require('../config/database');

const multer = require('multer');
const upload = multer({ dest: 'uploads' });
const { uploadFile } = require('../s3');

//Tell express to read incoming data as json
router.use(express.json());

function convertDate(Date) {

}

router.post('/addPost', upload.single('image'), async (req, res) => {
  //Interpret delivery checkbox
  const delivery = req.body.delivery ? 1 : 0;

  const file = req.file;
  const description = req.body.description;
  const price = req.body.price;
  const penalty = req.body.penalty;
  const equipment = req.body.equipment;
  const deposit = req.body.deposit;
  const location = req.body.location;
  const user = req.body.user;
  const category = req.body.category;
  const start = req.body.startDate;
  const end = req.body.endDate;

  // console.log("delivery: ", delivery);
  // console.log("description: ", description);
  // console.log("price: ", price);
  // console.log("penalty: ", penalty);
  // console.log("equipment: ", equipment);
  // console.log("deposit: ", deposit);
  // console.log("location: ", location);
  // console.log("user: ", user);
  // console.log("category: ", category);
  // console.log("start: ", start);
  // console.log("end: ", end);

  const result = await uploadFile(file);
  const filePath = result.Location;


  let query = `INSERT INTO Rental (startDay, endDay, RegisteredUser_ID, EquipmentCategory_ID, Price, delivery, description, imgURL, title, securityDeposit, penalty, location) VALUES ('${start} 00:00:00', '${end} 23:59:00', (SELECT RegisteredUser_ID FROM Register_User WHERE userName = '${user}'), (SELECT equipmentCategory_ID FROM Equipment_Category WHERE description = '${category}'), '${price}', '${delivery}', '${description}', '${filePath}', '${equipment}', '${deposit}', '${penalty}', '${location}');`;


  // Make query for data
  db.query(query)
    .then(([results, fields]) => {
      console.log(results);
      //Send the data to the frontend
      res.send({
        status: 'ok',
        msg: 'Successfully Posted'
      });
    })
    .catch((err) => {
      console.error('error connecting: ' + err.stack);
      res.redirect('/post');
    });

});

router.post(/\/./, (req, res) => {
  const postID = req.body.postID;
  let query = `SELECT * FROM Rental WHERE Rental_ID = ${postID}`;

  db.query(query)
    .then(([results, fields]) => {
      console.log(results);
      res.send(results[0]);
    })
    .catch((err) => {
      console.error('error connecting: ' + err.stack);
      res.redirect('/');
    });
});

router.post('/deletePost', (req, res) => {

  let query = `DELETE Equipment WHERE Equipment_ID = (); `

  //Make query for data
  db.query(query)
    .then(([results, fields]) => {
      console.log(results);

      //Send the data to the frontend
      res.send({
        status: 'ok',
        msg: 'Successfully Delete'
      });
    })
    .catch((err) => {
      console.error('error connecting: ' + err.stack);
      res.redirect('/post');
    })

});

module.exports = router;
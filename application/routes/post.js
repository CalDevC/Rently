const express = require('express');
const router = express.Router();
const db = require('../config/database');

//Tell express to read incoming data as json
router.use(express.json());

router.post('/addPost', (req, res) => {
  const description = req.body.description;
  const price = req.body.price;
  const penalty = req.body.penity;
  const equipment = req.body.equipment;
  const deposit = req.body.depositFee;
  const location = req.body.location;
  const delivery = req.body.delivery;
  const user = req.body.user;
  const category = req.body.category;

  let query = `INSERT INTO Rental (startDay, endDay, RegisteredUser_ID, EquipmentCategory_ID, Price, delivery, description, imgURL, title) VALUES ('2021-05-05 05:05:00', '2021-05-06 05:05:00', (SELECT RegisteredUser_ID FROM Register_User WHERE userName = '${user}'), (SELECT equipmentCategory_ID FROM Equipment_Category WHERE description = '${category}'), '${price}', '${delivery}', '${description}', '', '${equipment}');`;


  // Make query for data
  db.query(query)
    .then(([results, fields]) => {
      console.log(results);
      // res.redirect('/');
      //Send the data to the frontend
      res.send({
        status: 'ok',
        msg: 'Successfully Delete'
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
const express = require('express');
const router = express.Router();
const db = require('../config/database');

const multer = require('multer');
const upload = multer({ dest: 'uploads' });
const { uploadFile } = require('../s3');

//Tell express to read incoming data as json
router.use(express.json());

function convertDate(date) {
  let parts = date.split('/');
  return parts[2] + "-" + parts[0] + "-" + parts[1];
}

router.post('/addPost', upload.single('image'), async (req, res) => {
  //Interpret delivery checkbox
  const delivery = req.body.delivery ? 1 : 0;

  //Image
  const file = req.file;
  const result = await uploadFile(file);
  const filePath = result.Location;

  //Other post info
  const description = req.body.description;
  const price = req.body.price;
  const penalty = req.body.penalty;
  const equipment = req.body.equipment;
  const deposit = req.body.deposit;
  const location = req.body.location;
  const user = req.body.user;
  const category = req.body.category;
  const start = convertDate(req.body.startDate);
  const end = convertDate(req.body.endDate);

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
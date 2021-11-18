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

   let query = `INSERT INTO Rental
   (startDay,
   endDay,
   RegisteredUser_ID,
   EquipmentCategory_ID,
   Pricing_ID,
   delivery,
   description)
   VALUES
   ('2021 05 05 05:05:00',
   '2021 05 06 05:05:00',
   (SELECT RegisteredUser_ID FROM Register_User WHERE userName = ${localStorage.getItem('user')}),
   (SELECT equiomentCategory_ID FROM Equipment_Category WHERE description = ${description}),
   ${price},
   ${delivery},
   ${description});`;


   //Make query for data
   db.query(query)
      .then(([results, fields]) => {
         console.log(results);
         res.redirect('/');
         //Send the data to the frontend
         // res.send({
         //    status: 'ok',
         //    msg: 'Successfully Delete'
         // });
      })
      .catch((err) => {
         console.error('error connecting: ' + err.stack);
         res.redirect('/post');
      })

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
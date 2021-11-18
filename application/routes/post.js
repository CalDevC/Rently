const express = require('express');
const router = express.Router();
const db = require('../config/database');

//Tell express to read incoming data as json
router.use(express.json());

router.post('/addPost', (req, res) => {
   const description = req.body.description;
   const price = req.body.price;
   const penalty = req.body.penity;

   let query = `INSERT INTO Rental
   (startDay,
   endDay,
   RegisteredUser_ID,
   EquipmentCategory_ID,
   Pricing_ID,
   delivery,
   description)
   VALUES
   (<{startDay: }>,
   <{endDay: }>,
   <{RegisteredUser_ID: }>,
   (SELECT equiomentCategory_ID FROM Equipment_Category WHERE description = ${description}),
   ${price},
   <{delivery: }>,
   <{description: }>);`;


   //Make query for data
   db.query(query)
      .then((EquipmentCategory_ID) => {
         if (EquipmentCategory_ID = 0) {
            db.query = `INSERT INTO Equipment (description, price, penity) values ('${description}' '${price}' '${penity}') WHERE EquipmentCategory_ID = 0 ;`
            res.redirect('/');
         } else if (EquipmentCategory_ID = 1) {
            db.query = `INSERT INTO Equipment (description, price, penity) values ('${description}' '${price}' '${penity}') WHERE EquipmentCategory_ID = 1 ;`
            res.redirect('/');
         } else if (EquipmentCategory_ID = 2) {
            db.query = `INSERT INTO Equipment (description, price, penity) values ('${description}' '${price}' '${penity}') WHERE EquipmentCategory_ID = 2 ;`
            res.redirect('/');
         }
         //console.log(results); 
         //return Promise.resolve(results && results.affectedRows);

         //Send the data to the frontend
         //res.send({
         // status: 'ok',
         //msg: 'Successfully Post'
         //});
      })
      .catch((err) => {
         console.error('error connecting: ' + err.stack);
         res.redirect('/post');
      })

});

router.post('/deletePost', (req, res) => {
   let description = req.body.description;
   let price = req.body.price;
   let penity = req.body.penity;

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
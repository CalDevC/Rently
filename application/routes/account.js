const express = require('express');
const router = express.Router();
const db = require('../config/database');

//Tell express to read incoming data as json
router.use(express.json());

router.post('/login', (req, res) => {

   const username = req.body.username;
   const password = req.body.password;

   if (!username || username.trim() === '' || !password || password.trim() === '') {
      console.log('ERROR - no username or password given')
      res.send('error');
   }

   let query = `SELECT * FROM Register_User WHERE username = '${username}';`;

   //Make query for data
   db.query(query)
      .then(([results, fields]) => {
         console.log(results);

         //Send the data to the frontend
         if (results.length > 0 && password == results[0].password) {
            console.log(results);
            res.send({
               status: 'ok',
               msg: 'Successfully logged in',
               user: results[0]
            });
         }
         else {
            res.send({
               status: 'bad',
               msg: 'Invalid Username or Password'
            });
         }

      })
      .catch((err) => {
         console.error('error connecting: ' + err.stack);
         next(err);
      })

});


router.post('/register', (req, res) => {
   let username = req.body.username;
   let email = req.body.email;
   let password = req.body.password;
   let dob = req.body.dob;
   let address = req.body.address;
   let zipCode = req.body.zipCode;
   console.log(password);
   console.log(dob);

   let query = `INSERT INTO Register_User (userName, email, salt, password, dob, address, zipCode) values ('${username}', '${email}', '', '${password}', '${dob}', '${address}', '${zipCode}');`;

   //Make query for data
   db.query(query)
      .then(([results, fields]) => {
         console.log(results);

         //Send the data to the frontend
         res.send({
            status: 'ok',
            msg: 'Successfully Register'
         });
      })
      .catch((err) => {
         console.error('error connecting: ' + err.stack);
         //next(err);
      })

});

module.exports = router
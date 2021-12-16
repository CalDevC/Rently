const express = require('express');
const router = express.Router();
const db = require('../config/database');
const bcrypt = require('bcrypt');

//Routes dealing with user accounts

//Tell express to read incoming data as json
router.use(express.json());

//Route to login the user
router.post('/login', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  //Check that a username and password were provided
  if (!username || username.trim() === '' || !password || password.trim() === '') {
    console.log('ERROR - no username or password given')
    res.send('error');
  }

  let query = `SELECT * FROM Register_User WHERE username = '${username}';`;

  //Make query for data
  db.query(query)
    .then(([results, fields]) => {
      console.log(results);

      //Check that we get results and unencrypt password for comparison
      if (results.length > 0 && bcrypt.compare(password, results[0].password)) {
        //Send the data to the frontend
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

//Route for registering new users
router.post('/register', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let dob = req.body.dob;
  let address = req.body.address;
  let zipCode = req.body.zipCode;

  //Encrypt password with bcrypt
  bcrypt.hash(req.body.password, 10)
    .then((hash) => {
      let query = `INSERT INTO Register_User (userName, email, salt, password, dob, address, zipCode) values ('${username}', '${email}', '', '${hash}', '${dob}', '${address}', '${zipCode}');`;
      return db.query(query);
    })
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
    });

});

//Route for getting user info based on user ID
router.post('/getInfo', (req, res) => {
  const userID = req.body.userID;

  let query = `SELECT * FROM Register_User WHERE RegisteredUser_ID = ${userID}`;

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

//Route for getting user info by name
router.post('/getInfoByName', (req, res) => {
  const user = req.body.user;

  let query = `SELECT * FROM Register_User WHERE RegisteredUser_ID = (SELECT RegisteredUser_ID FROM Register_User WHERE userName = '${user}')`;

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

//Route for updating user details
router.post('/profile', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let dob = req.body.dob;
  let address = req.body.address;
  let zipCode = req.body.zipCode;
  let id = req.body.id;

  let query = `UPDATE Register_User SET userName = '${username}', email = '${email}', dob = '${convertDate(dob)}', address = '${address}', zipCode = '${zipCode}' WHERE RegisteredUser_ID = '${id}';`;

  //Make query for data
  db.query(query)
    .then(([results, fields]) => {
      console.log(results);

      //Send the data to the frontend
      res.send({
        status: 'ok',
        msg: 'Successfully Saved'
      });
    })
    .catch((err) => {
      console.error('error connecting: ' + err.stack);
    });
});

//Function for converting date from mm/dd/yyyy to DB format
function convertDate(date) {
  if (date) {
    let parts = date.split('/');
    return parts[2] + "-" + parts[0] + "-" + parts[1];
  }
}

module.exports = router
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const bcrypt = require('bcrypt');

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
      console.log("SENDING DATA ");
      console.log("INPUT PASS  ", results[0].password);
      if (results.length > 0 && bcrypt.compare(password, results[0].password)) {
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
  console.log("REG PASS ", req.body.password);
  let dob = req.body.dob;
  let address = req.body.address;
  let zipCode = req.body.zipCode;

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

router.post('/getInfo', (req, res) => {
  const userID = req.body.userID;
  console.log("HERE: ", userID);
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

router.post('/profile', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let dob = req.body.dob;
  let address = req.body.address;
  let zipCode = req.body.zipCode;
  let id = req.body.id;

  let query = `UPDATE Register_User SET userName = '${username}', email = '${email}', password = '${password}', dob = '${convertDate(dob)}', address = '${address}', zipCode = '${zipCode}' WHERE RegisteredUser_ID = '${id}';`;

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

function convertDate(date) {
  if (date) {
    let parts = date.split('/');
    return parts[2] + "-" + parts[0] + "-" + parts[1];
  }
}

module.exports = router
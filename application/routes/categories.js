const express = require('express');
const router = express.Router();
const db = require('../config/database');

//Sends a json object containing all of the categories and their IDs
router.get('/all', (req, res) => {

  //Statement to fetch categories
  query = 'SELECT * FROM Equipment_Category';

  //Fetch categories from database
  db.query(query)
    .then(([results, fields]) => {
      res.send({
        categoryList: results
      });
    })
    .catch((error) => {
      console.log("Error: " + error);
    });

});

//Category page routes
router.get(/\/(...)/, (req, res) => {
  // res.send({express: "express"});
  let desc = /categories\/(.+)/.exec(req.originalUrl)[1].replace(/%20/g, ' ');
  let query = `SELECT * FROM Rental WHERE EquipmentCategory_ID = ( SELECT equipmentCategory_ID FROM Equipment_Category WHERE description = '${desc}' );`

  db.query(query)
    .then(([results, fields]) => {
      console.log(results);
      res.send({
        results: results
      });
    })
    .catch((err) => {
      console.error('error connecting: ' + err.stack);
      next(err);
    });
});

module.exports = router;
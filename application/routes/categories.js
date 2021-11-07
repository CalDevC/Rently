const express = require('express');
const router = express.Router();
const db = require('../config/database');

//Sends a json object containing all of the categories and their IDs
router.get('/all', (req, res) => {

  //Statement to fetch categories
  query = 'SELECT * FROM Equipment_Category';

  //Fetch categories from database
  db.query(query)
  .then( ([results, fields]) => {
    res.send({
      categoryList: results
    });
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

});

//Category page routes
router.get('api/posts/:catId', (req, res) => {
  let query = `SELECT * FROM Equipment WHERE EquipmentCategory_ID = '${req.params.catId}'`

  db.query(query)
  .then(([results, fields]) => {
    res.send(
      results[0]
    );
  })
  .catch((err) => {
    console.error('error connecting: ' + err.stack);
    next(err);
  });
});

module.exports = router;
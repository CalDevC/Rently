const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.send(
    { sampleJSON: 'sample JSON text' }
  );
});

router.get('/register', (req, res) => {
  res.send(
    { sampleJSON: 'sample JSON text' }
  );
});

module.exports = router;
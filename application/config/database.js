const mysql = require('mysql2');

//Use connection pooling
const pool = mysql.createPool({
  connectionLimit: 50,
  host: 'database-1.c0xp0u07woyj.us-west-1.rds.amazonaws.com',
  user: 'admin',
  password: '918330561',
  database: 'Rently',
  insecureAuth: true,
  queueLimit: 0,
  debug: false,
  multipleStatements: true
});

//Create promise pool
const promisePool = pool.promise();

module.exports = promisePool;
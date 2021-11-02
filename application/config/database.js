const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 50,
    host: 'database-1.c0xp0u07woyj.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: '918330561',
    debug: false,
    multipleStatements: true
});

const promisePool = pool.promise();

module.exports = promisePool;
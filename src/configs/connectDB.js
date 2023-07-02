// get the client
// const mysql = require('mysql2');
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

// simple query


// with placeholder
// connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45],
//     function (err, results) {
//         console.log(results);
//     }
// );

export default connection;
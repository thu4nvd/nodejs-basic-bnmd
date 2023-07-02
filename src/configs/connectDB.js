import mysql from 'mysql2/promise';

// create the pool to database
console.log(">>> Creating pool connection...");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
    // password: 'PASSWORD
});

export default pool;
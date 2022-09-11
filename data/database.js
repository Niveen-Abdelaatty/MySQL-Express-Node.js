const mysql = require('mysql2/promise');

// Establish the database connection
const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user: 'root',
    password: 'PortSaid_202'
});

// Export the db connection
module.exports = pool;
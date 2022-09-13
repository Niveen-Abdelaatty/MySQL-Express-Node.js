const mysql = require('mysql2/promise');

// Establish the database connection
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    database: 'blog',
    user: 'root',
    password: 'PortSaid_202'
});
pool.getConnection((err,connection)=> {
    if(err)
    throw err;
    console.log('Database connected successfully');
    connection.release();
  });
  
// Export the db connection
module.exports = pool;
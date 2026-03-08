const mysql=require('mysql2');

const pool=mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : 'DhruvMac@1228',
  database : 'airbnb'
});

module.exports=pool.promise();
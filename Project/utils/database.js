const mysql=require('mysql2');

const pool=mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : 'DhruvMac@1228',
  database : 'Tomato'
});

module.exports=pool.promise();
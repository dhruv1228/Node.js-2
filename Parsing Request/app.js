const http=require('http');
const reqhandler=require('./user');
const { URLSearchParams } = require('url');
const server=http.createServer(reqhandler);


const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server running at port ${PORT}`);
})
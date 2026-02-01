const bodyParser = require('body-parser');
const express=require('express');
const path=require('path');
const app=express();
const {userRouter}=require('./routes/userRouter');
const {hostRouter}=require('./routes/hostRouter');

app.use(bodyParser.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server running at port ${PORT}`);
});
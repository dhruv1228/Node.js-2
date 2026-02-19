const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const {userRoute}=require('./routes/userRoute');
const {hostRoute}=require('./routes/hostRoute');
const {notfound}=require('./views/controllers/404');
const app=express();
app.set('view engine','ejs');
app.set('views','views');

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

app.use(bodyParser.urlencoded());

app.use(userRoute);
app.use(hostRoute);

app.use(notfound);

app.listen(3000,()=>{
  console.log("Server is runnig at port 3000");
})
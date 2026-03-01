const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const storeRouter=require('./routes/storeRouter');
const hostRoute=require('./routes/hostRouter');
const {notfound}=require('./views/controllers/404');
const app=express();
app.set('view engine','ejs');
app.set('views','views');

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

app.use(bodyParser.urlencoded());

app.use(storeRouter);
app.use(hostRoute);

app.use(notfound);

app.listen(3000,()=>{
  console.log("Server is runnig at port 3000");
})
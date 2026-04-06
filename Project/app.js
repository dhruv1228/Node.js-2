//core modules
const express=require('express');
const bodyparser=require('body-parser');

//local modules
const {loginroute}=require('./routes/login');
const {signupRoute}=require('./routes/signup');

const app=express();

app.use(bodyparser.urlencoded());
app.set('view engine','ejs');
app.set('views','views');

app.use(loginroute);
app.use(signupRoute);

app.listen(3000,()=>{
  console.log("Server is running at port 3000");
})
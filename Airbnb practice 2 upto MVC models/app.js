//core modules
const express = require('express');
const bodyparser=require('body-parser');
const app = express();
//local modules
const {userRouter}=require('./routes/userRoute');
const {hostRouter}=require('./routes/hostRoute');

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyparser.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
  res.status(404).render('404',{pagetitle : 'Page not found'});
})

const port = 3000;
app.listen(port,()=>{
  console.log(`Server running at https://localhost:${port}`);
})
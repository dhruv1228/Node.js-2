const express=require('express');
const app=express();

app.use((req,res,next)=>{
  console.log("First dummy middleware",req.url,req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("Second dummy middleware",req.url,req.method);
  next();
});

// app.use('/',(req,res,next)=>{
//   console.log("Third dummy middleware",req.url,req.method);
//   res.send("Hello This is Dhruv");
// });

app.get('/contact-us',(req,res,next)=>{
  res.send(`<p>This is contact-us page</p>
    <form action="/contact-us" method="post">
    <input type="text" name="name" placeholder="Name"/></br>
    <input type="text" name="email" placeholder="Email"/></br>
    <button>Submit</button>
    </form>`);
})

app.post('/contact-us',(req,res,next)=>{
  console.log("This is post contact-us");
  const body=[];
  req.on('data',(chunk) => body.push(chunk));
  req.on('end',()=>{
    const fullbody=Buffer.concat(body).toString();
    const params=new URLSearchParams(fullbody);
    const jsonBody=Object.fromEntries(params);
    console.log(jsonBody);
  })
});

app.listen(3000,()=>{
  console.log("Server running at port 3000");
});
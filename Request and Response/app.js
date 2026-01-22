const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/')
  {
    res.setHeader('Content-Type','text/html');
  res.write(`<html>
    <body>
    <h1>Hello Dhruv</h1>
    </body>
    </html>
    `);
    res.end();
  }
  else if(req.url==='/about')
  {
    res.setHeader('Content-Type','text/html');
  res.write(`<html>
    <body>
    <h1>Hello Dhruv About</h1>
    </body>
    </html>
    `);
    res.end();
  }
  else if(req.url==='/submit' && req.method==='POST')
  {
    fs.writeFileSync('user.txt','Dhruv');
    res.statusCode=302;
    res.setHeader('Location','/');
    res.end();
  }
  else if(req.url==='/form')
  {
    res.setHeader('Content-Type','text/html');
  res.write(`<html>
    <body>
    <form method="POST" action="/submit">
    <label>Enter your name</label>
    <input type="text" name="name"/>
    <label>Enter your city</label>
    <input type="text" name="city"/>
    <label>Enter your gender</label>
    <input type="radio" id="male" name="gender">Male</input>
    <input type="radio" id="female" name="gender">Female</input>
    <input type="submit" value="submit"/>
    </form>
    </body>
    </html>
    `);
    res.end();
  }
  else{
    res.setHeader('Content-Type','text/html');
  res.write(`<html>
    <body>
    <h1>Hello Dhruv Else</h1>
    </body>
    </html>
    `);
    res.end();
  }
  
})

const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server running at https://localhost:${PORT}`);
});
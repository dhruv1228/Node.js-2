const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/')
  {
    res.setHeader('Content-Type','text/html');
  res.write(`<html>
    <body>
    <a href="/">Home</a>
    <a href="/men">Men</a>
    <a href="/women">Women</a>
    <a href="/form">Form</a>
    <h1>Home</h1>
    </body>
    </html>
    `);
    res.end();
  }
  else if(req.url==='/men')
  {
    res.setHeader('Content-Type','text/html');
  res.write(`<html>
    <body>
    <a href="/">Home</a>
    <a href="/men">Men</a>
    <a href="/women">Women</a>
    <a href="/form">Form</a>
    <h1>Men</h1>
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
    <a href="/">Home</a>
    <a href="/men">Men</a>
    <a href="/women">Women</a>
    <a href="/form">Form</a>
    <h1>Form</h1>
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
  else if(req.url='/women')
  {
    res.setHeader('Content-Type','text/html');
  res.write(`<html>
    <body>
    <a href="/">Home</a>
    <a href="/men">Men</a>
    <a href="/women">Women</a>
    <a href="/form">Form</a>
    <h1>Women</h1>
    </body>
    </html>
    `);
    res.end();
  }
  else{
    res.setHeader('Content-Type','text/html');
  res.write(`<html>
    <body>
    <a href="/">Home</a>
    <a href="/men">Men</a>
    <a href="/women">Women</a>
    <a href="/form">Form</a>
    <h1>Page not found</h1>
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
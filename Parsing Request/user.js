const fs=require('fs');

const reqhandler=(req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/')
  {
    res.write(`<html>
      <body>
      <h1>Go to form</h1>
      <a href="/form">form</a>
      </body>
      </html>`);
      res.end();
  }
  else if(req.url==='/form' && req.method==='GET')
  {
    res.write(`<html>
      <body>
      <h1>Form</h1>
      <form action="/form" method="POST">
      <input type="text" name="username" placeholder="Name"/>
      <input type="submit" value="submit"/>
      </form>
      </body>
      </html>`);
      return res.end();
  }
  else if(req.url==='/form' && req.method==='POST')
  {
    res.write('Submitted');
    const body=[];
    req.on("data",(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end',()=>{
      const fullbody=Buffer.concat(body).toString();
      console.log(fullbody);
      const params=new URLSearchParams(fullbody);
      // const jsonbody={};
      // for(const [key,value] of params.entries())
      // {
      //   jsonbody[key]=value;
      // }
      const jsonbody=Object.fromEntries(params);
      console.log(jsonbody);
      fs.writeFileSync('user.txt',JSON.stringify(jsonbody));
    })
    res.end();
  }
  else{
    res.write(`<html>
      <body>
      <h1>Page not found</h1>
      </body>
      </html>`);
      res.end();
  }
}

module.exports=reqhandler;
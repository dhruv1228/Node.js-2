const sumRequestHandler=(req,res)=>{
  console.log("In Sum Request Handler",req.url,req.method);
  const body=[];
  req.on('data',(chunk)=> body.push(chunk));
  console.log(body);
  req.on('end',()=>{
    const fullbody=Buffer.concat(body).toString();
    const params=new URLSearchParams(fullbody);
    const bodyobj=Object.fromEntries(params);
    let result=Number(bodyobj.Firstnum)+Number(bodyobj.Secondnum);
    console.log(result);
    res.write(`<html>
        <head>
          <title>Calculator</title>
        </head>
        <body>
          <h1>Here is yout result</h1>
          <h2>Your result is ${result}</h2>
          <a href="/calculator">Go to calculator</a>
        </body>
      </html>`);
      return res.end();
  });
}

exports.sumRequestHandler=sumRequestHandler;
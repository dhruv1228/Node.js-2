const path=require('path');
const fs=require('fs');

const homedatapath=path.join(__dirname,'..','data','homes.json');


// const registeredhomes=[];

module.exports=class Home{
  constructor(homename,location,price,rating,imageurl){
    this.homename=homename;
    this.location=location;
    this.rating=rating;
    this.price=price;
    this.imageurl=imageurl;
  }

  save(){
    this.id=Math.random().toString();
    Home.fetchAll(registeredhomes=>{
      registeredhomes.push(this);
      fs.writeFile(homedatapath,JSON.stringify(registeredhomes),error=>{
        console.log(error);
      });
    });
    
  }

  static fetchAll(callback){
    fs.readFile(homedatapath,(err,data)=>{
      callback(!err?JSON.parse(data):[]);
    });
  }

  static findbyID(homeid,callback){
    Home.fetchAll(homes=>{
      const homefound=homes.find(home=>home.id==homeid);
      callback(homefound);
    })
  }
}
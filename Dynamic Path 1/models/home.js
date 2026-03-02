// const registeredhomes=[];
const fs=require('fs');
const path=require('path');
const homedatapath=path.join(__dirname,'..','data','homes.json');
module.exports=class Home{
  constructor(homename,price,rating,location,imageurl){
    this.homename=homename;
    this.price=price;
    this.rating=rating;
    this.location=location;
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
  };

  static fetchAll(callback){
    
    fs.readFile(homedatapath,(err,data)=>{
      callback(!err?JSON.parse(data):[]);
    });
  };

  static findbyId(homeid,callback){
    Home.fetchAll(homes=>{
      const homeFound=homes.find(home=>home.id==homeid);
      callback(homeFound);
    })
  }
};


const path=require('path');
const fs=require('fs');

const homedatapath=path.join(__dirname,'..','data','homes.json');


// const registeredhomes=[];

module.exports=class Home{
  constructor(homename,location,price,rating,number,imageurl){
    this.homename=homename;
    this.location=location;
    this.price=price;
    this.rating=rating;
    this.number=number;
    this.imageurl=imageurl;
  }

  save(){
    Home.fetchAll(registeredhomes=>{
      if(this.id){
        registeredhomes=registeredhomes.map(home=>{
          if(home.id===this.id){
            return this;
          }
          return home;
        });
      }
      else{
        this.id=Math.random().toString();
        registeredhomes.push(this);
      }
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

  static deletebyid(homeid){
    Home.fetchAll(registeredhomes=>{
      registeredhomes=registeredhomes.filter(home=>home.id!=homeid);
      fs.writeFile(homedatapath,JSON.stringify(registeredhomes),error=>{
        console.log(error);
      });
    });
    
  }

  static findcontactdetails(homeid,callback){
    Home.fetchAll(homes=>{
      const found=homes.find(home=>home.id==homeid);
      callback(found);
    })
  }
}
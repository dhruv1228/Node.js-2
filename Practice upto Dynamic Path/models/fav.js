const home=require('./homes');
const fs=require('fs');
const path=require('path');

const favdatapath=path.join(__dirname,'..','data','fav.json');

module.exports=class fav{
  constructor(id){
    this.idd=id;
  }
  save(){
    fav.fetchfav(homes=>{
      home.fetchAll(homess=>{
        const homefound=homess.find(home=>home.id==this.idd);
        homes.push(homefound);
        console.log(homes);
        fs.writeFile(favdatapath,JSON.stringify(homes),(error)=>{
        console.log(error);
      });
      });
      
    })
  }

  static fetchfav(callback){
    fs.readFile(favdatapath,(err,data)=>{
      callback(!err?JSON.parse(data):[]);
    })
  }

  static findbyID(homeid,callback){
    fav.fetchfav(homes=>{
      const homefound=homes.find(home=>home.id==homeid);
      callback(homefound);
    });
  }
}
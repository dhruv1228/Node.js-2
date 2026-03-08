const db=require('../utils/database');

module.exports=class Home{
  constructor(homename,location,price,rating,number,imageurl,description,id){
    this.homename=homename;
    this.location=location;
    this.price=price;
    this.rating=rating;
    this.number=number;
    this.imageurl=imageurl;
    this.description=description;
    this.id=id;
  }

  save(){
    if(this.id){
      return db.execute('UPDATE homes SET homename=?,location=?,price=?,rating=?,imageurl=?,description=? WHERE id=?',[this.homename,this.location,this.price,this.rating,this.imageurl,this.description,this.id]);
    }
    else{
      return db.execute('INSERT INTO homes (homename,location,price,rating,imageurl,description) VALUES(?,?,?,?,?,?)',[this.homename,this.location,this.price,this.rating,this.imageurl,this.description]);
    }
    
  }

  static fetchAll(){
    return db.execute("SELECT * FROM homes")
  }

  static findbyID(homeid){
    return db.execute('SELECT * FROM homes WHERE id=?',[homeid]);
  }

  static deletebyid(homeid){
    return db.execute('DELETE FROM homes WHERE id=?',[homeid]);
  }

  static findcontactdetails(homeid){
    return db.execute('SELECT number FROM homes WHERE id=?',[homeid]);
  }
}
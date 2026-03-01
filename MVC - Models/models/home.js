const registeredhomes=[];
module.exports=class Home{
  constructor(homename,price,rating,location,imageurl){
    this.homename=homename;
    this.price=price;
    this.rating=rating;
    this.location=location;
    this.imageurl=imageurl;
  }
  save(){
    registeredhomes.push(this);
  }
  static fetchAll(){
    return registeredhomes;
  }
}
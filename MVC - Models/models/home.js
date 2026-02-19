const registeredhomes=[];
module.exports=class Home{
  constructor(homename,price,rating,location,photourl){
    this.homename=homename;
    this.price=price;
    this.rating=rating;
    this.location=location;
    this.photourl=photourl;
  }
  save(){
    registeredhomes.push(this);
  }
  static fetchAll(){
    return registeredhomes;
  }
}
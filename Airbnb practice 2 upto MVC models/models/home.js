const registeredhomes=[];

module.exports=class Home {
  constructor(homename,location,price,rating){
    this.homename=homename;
    this.location=location;
    this.price=price;
    this.rating=rating;
  }

  save(){
    registeredhomes.push(this);
  }

  static fetchAll(){
    return registeredhomes;
  }
}
const registeredhomes=[{homename:'Galaxy',price:'5499',rating:'5',location:'Mumbai',imageurl:'https://teja12.kuikr.com/is/p/f/800x600/guide/wp-content/uploads/2013/10/bandra-property.jpg'},{homename:'Burj Khalifa',price:'15999',rating:'5',location:'Dubai',imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-b8WUbknRXMv3KsSBQVGmFVRJ3Ur9d-WvA&s'},{homename:'Sai Aasta Appartment',price:'1299',rating:'3.5',location:'Delhi',imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQJd33L9gc79jW-x2k-hub0okFa8PBvQ2-g&s'}];
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
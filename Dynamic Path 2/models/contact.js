const registeredcontacts=[];

module.exports=class Contact{
  constructor(name,number){
    this.name=name;
    this.number=number;
  }

  static save(){
    registeredcontacts.push(this);
  }

  static fetchContact(){
    return registeredcontacts;
  }
}
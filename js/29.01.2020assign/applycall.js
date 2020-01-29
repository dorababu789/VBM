var Person=function(firstname,lastname,age,address,number,email){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.address=address;
    this.number=number;
    this.email=email;
    this.getfullname=function(city){
           console.log(this.firstname+" "+this.lastname+" "+city)
    }
    this.getemail=function(city){
        console.log("My Emailid"+" "+this.email+" "+city)
    }
    this.getaddress=function(city){
        console.log(" My Address"+" "+this.address+" "+city)
    }
}
// var per=new Person( "My fulname"+"   "+"Dora","Babu",25,"yanam","hyd",9177614257,"dorababu.vempatapu@gmail.com")
// per.getfullname()
// per.getmail()
// per.getaddress()
//use the call method
// var per=new Person("dora" ,"babu",25,"yanam",9177614257,"dorababu@gmail.com");
//   per.getfullname.call(per,"hyd")
//   per.getemail.call(per,"hyd")
//   per.getaddress.call(per,"hyd")
  //use the apply method
var per=new Person("dora" ,"babu",25,"yanam",9177614257,"dorababu@gmail.com")
per.getfullname.apply(per,["hyd"])
per.getaddress.apply(per,["hyd"])
per.getemail.apply(per,["hyd"])
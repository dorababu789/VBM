// var electricity=function(sid,uid,numberofunits,priceofunit,surcharge){
//     this.sid=sid;
//     this.uid=uid;
//     this.numberofunits=numberofunits;
//     this.priceofunit=priceofunit;
//     this.surcharge=surcharge
//     this.getfinalbill=function(){
//           console.log ("serviceid"+" " +this.sid+"  "+"uniqueid"+ " " +this.uid+"  "+"finalbill"+"  "+(this.numberofunits*this.priceofunit+this.surcharge))
//     }
        
// }
// var bill=new electricity(101,2568,10,15,30)
// bill.getfinalbill()
//get electricityfinalbill

// var electricity=function(sid,uid,numberofunits){
//     this.sid=sid;
//     this.uid=uid;
//     this.numberofunits=numberofunits;
//     var priceofunit=30;    
//     var surcharge=15;
//     this.getfinalbill=function(){
//        console.log ("serviceid"+" " +this.sid+"  "+"uniqueid"+ " " +this.uid+"  "+"finalbill"+"  "+(this.numberofunits*priceofunit+surcharge))

//     }
        
// }
// var bill=new electricity(101,2568,10)
// bill.getfinalbill()
//get employee final salary


var Employee =function(id,name,sal){
    this.id=id;
    this.name=name;
    this.sal=sal;
    var monthlybonus=10000
    this.getfinalsalry=function(){
             console.log("employeid"+" "+this.id+" "+"Employeename"+" "+ this.name+" "+  "my final salary is"+" "+(this.sal+monthlybonus))
    }
}
var emp= new Employee(101,"dora" ,12000)
emp.getfinalsalry()



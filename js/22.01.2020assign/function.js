
// var Person=function(){
//     this.id=101;
//     this.fisrtname="dora";
//     this.lastname="babu";
//     this.grade="A";
//     this.m1=90;
//     this.m2=90;
//     this.m3=90;
//     this.getTotal=function(){
//         return this.m1+this.m2+this.m3
//     };
//   }

//   var dora=new Person()

//   console.log(dora.getTotal())

var Person = function (id, fisrtname,lastname,m1,m2,m3) {
    this.id = id;
    this.fisrtname = fisrtname;
    this.lastname = lastname;
    this.m1 = m1;
    this.m2 = m2;
    this.m3 = m3;
    this.getTotal = function () {
        return (this.m1 + this.m2 + this.m3)
    }
       this.getFullname=function(){
           return (this.fisrtname+lastname)
       }
       this.getGrade=function(){
           var xyz=this.getTotal()
        if (xyz>= 80) {
            console.log("A grade")
        } if(xyz < 80 && xyz >= 70){
            console.log("B grade")
        } if(xyz < 70 && xyz >= 60){
            console.log(" C grade")
        } if(xyz < 60 && xyz> 35){
            console.log("D grade")
        } if( xyz < 35){
            console.log("Fail")
        }

       }

    
}

var dora = new Person(101,"dora","babu",80,82,84)
var dora2=new Person(102, "siva","shankar",85,86,89)
var dora3=new Person(103, "venky","kol",75,78,79)
var dora4=new Person(104, "jai","chandu",80.90,85)
var dora5=new Person(105, "phani,bro",85,95,85)
var dora6=new Person(106, "sanju","sanju",45,45,56)
var dora7=new Person(107, "pranay","hero",25,26,45)
var dora8=new Person(108, "karthi","babu",42,32,22)
var dora9=new Person(109, "anr","nag",32,42,52)
var dora10=new Person(110, "vamsi","rock", 52,58,59)

console.log(dora10.getGrade())

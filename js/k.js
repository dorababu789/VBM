function std(name,) {
    var std1 = [{ "sid": 01, "sname": "dora", "m1": 80, "m2": 85, "m3": 90, "m4": 75, "m5": 75, "m6": 80, "m7": 90, "total": 0 },
   { "sid": 02, "sname": "siva", "m1": 85, "m2": 95, "m3": 95, "m4": 85, "m5": 85, "m6": 80, "m7": 90, "total": 0 },
   { "sid": 03, "sname": "raju", "m1": 95, "m2": 80, "m3": 90, "m4": 80, "m5": 95, "m6": 80, "m7": 90, "total": 0 },
    { "sid": 04, "sname": "venky", "m1": 90, "m2": 75, "m3": 87, "m4": 89, "m5": 75, "m6": 80, "m7": 95, "total": 0 }]
   std1.forEach(function (val, ind) {
            var abc = val.m1 + val.m2 + val.m3 + val.m4+val.m5+val.m6+val.m7
              val.total = abc
            console.log({name:val.sname,total:val.total})
        });
   }
   std()



//    )
//}
//std();


// var emp={
//    "emp id":01,
//    "empname":"dora",
//    "empsal":0,
//    "egrade":"B",
//    "edept":"fullstack",
//    "position":function(sal){
//        emp.empsal=sal;
//        if( sal<20000){
//            return "my position"+" "+"trainee"+" my salary"+" "+sal;
//        }
//        if( sal<=20000){
//            return "excutive"+"    "+sal;
//        }
//        if( sal>20000){
//            return "srexcutive"+"    "+sal;
//        }
//    }
// }
// console.log(emp.position(1000))
// console.log(emp.empsal)



// var a="siva"

// var b= "raju"
// c.contact(a+b)

// var abc = [10,20]

// abc=abc.toString()
// console.log(abc)
// console.log(typeof(abc))

// xyz= 'bad is bad'
// console.log(xyz)
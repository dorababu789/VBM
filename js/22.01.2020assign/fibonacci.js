
var n=10;
var a=0;
var b=1;
var v;
console.log(a)
console.log(b)
for(i=2;i<=n;i++){
    v=a+b;
    console.log(v)

    a=b;
    b=v;

}
// }
// var fab=[0,1]
// var n;
// function fab1(n){
//     for(i=1;i<=n;i++){
//         fab.push(fab[i]+fab[i-1]);
//     }
//     console.log(fab)
// }
// fab1(10)
// fab1(50)
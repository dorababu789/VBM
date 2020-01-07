// var n=9;
// var count=0;
// for(var i=0;i<=n;i++){
//     if(n%i==0){
//         count++;
//     }
// }
// if(count==2){
//     console.log("it is prime number")
// }
// else{
//     console.log("it is a not prime number")
// }
var n=10000;
for(i=0;i<=n;i++){
    count=0;
    for(j=0;j<=i;j++){
        if(i%j==0){
            count++
        }
    }
    if(count==2){
        console.log(i)
    }
}
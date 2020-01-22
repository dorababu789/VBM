var a=[200,300.450,5,78,89,669,855,54,45,59]
var b=200;
/*for(i=0;i<=a.length;i++){
    if(a[i]>b){
        b=a[i];
    }
}*/
a.forEach(function(val,ind){
    if(val>b){
    b=a[ind];
    }
}
)

console.log(b)
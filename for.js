//Question-1:-
var a=[1,2,3,4,5,{id:1,age:25},[1,2,3]];
for(i=a.length-1;i>=0;i--){
    console.log(a[i]);
}

//Question-2:-
var a="surya";
var b="";
for(i=a.length-1;i>=0;i--){
    b+= a[i];
}
console.log(b);

//Question-3:-
var a=[1,2,3,4,5,{id:1,age:25},[1,2,3]];
for(value of a){
    if(typeof value === "object"){
        console.log(value.age);
        break;
    }
}
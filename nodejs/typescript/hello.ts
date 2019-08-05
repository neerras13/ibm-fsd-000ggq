let a:any='neeraja';
console.log(a);
a=23;
console.log(a);

var b:number =2;
const c=7;
console.log(number(b,c));
function number(c,b):number{
    return c*b;
}

var arr:string[] = Array();
arr=['Abc','Def','Ghi'];

arr.forEach(u=>{
    console.log("String is"+u);
});

var objects:any[]=Array();       //store in any type
objects =[1,'dsf',3.7,
{
    id: 1,
    name: 'neeraja'
}, false];

objects.forEach(u=>{
    console.log("Object is"+u);
});
console.log(JSON.stringify(objects[3]));

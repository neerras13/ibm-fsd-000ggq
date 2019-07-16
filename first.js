//'user strict';
console.log('Hello World');
document.write("Welcome to javascript<br />");
var id=13;
console.log('id is',id);
id= 'neeraja' ;
document.write(`id changed -> ${id}<br />`); //<br/> new line
document.write(`j ${3+8}`);

//array
let arr = [1, 4, 8, 54, 'raghava'];
document.write(`<br /> ${arr}<br />`);
arr[4]='neeRRaja'
document.write(arr);
delete arr[3];
document.write("<br />modified<br />",arr);
console.log(arr);

//Objects in JS
let user1= {
    id: 1,
    name: 'John Smith',
    phone: 123
};
let user2 = {
    id: 2,
    name: 'Joan Smith',
    phone: 456 ,
    email: 'hd@jhv'
};
let users = [user1,user2];
console.log(users[1].name+' '+users[1].phone);
console.log(users);

if(users[0].email == undefined){
    console.log("Email doesn't exist");
}

// Adding and removing elements from js array
var oddNum = [1,3,5,7];
oddNum.push(9);        //adds to last
console.log("Pushed value:", oddNum);
oddNum.pop();          //removes from last
console.log(oddNum);

var evenNum=[2,4,6,8];
oddNum=oddNum.concat(evenNum);
console.log(oddNum);

//Loops
for(i=0;i<5;i++){      //No prior declaration for i value 
   console.log(i);     //we can use 'use strict'; at the first to follow proper declaration
}       

i=0;
while(i<5){
    console.log(i);
    i++;
}

//for In loop
messages = ['hi','hello','Hola'];
for(let m of messages)
{
    console.log(m);              //prints value in the array
}
for(let m in messages)
{
    console.log(m);             //prints indices of values in the array 
    console.log(messages[m]);    //prints value 
}
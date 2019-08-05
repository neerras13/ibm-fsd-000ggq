var a = 'neeraja';
console.log(a);
a = 23;
console.log(a);
var b = 2;
var c = 7;
console.log(number(b, c));
function number(c, b) {
    return c * b;
}
var arr = Array();
arr = ['Abc', 'Def', 'Ghi'];
arr.forEach(function (u) {
    console.log("String is" + u);
});
var objects = Array(); //store in any type
objects = [1, 'dsf', 3.7,
    {
        id: 1,
        name: 'neeraja'
    }, false];
objects.forEach(function (u) {
    console.log("Object is" + u);
});
console.log(JSON.stringify(objects[3]));
var test = { id: 3, name: "test" };
test += { id: 1, name: "zfd" };
var d = JSON.stringify(test[0]);
console.log("test " + d);

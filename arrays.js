const stud = [
    {
        id: 001, name: 'xyz', marks: 98
    },
    {
        id: 002, name: 'abc', marks: 89
    },
    {
        id: 003, name: 'def', marks: 76
    }
];


const loadStudents= ()=>{    //ARROW FUNCTION in place of function keyword, parameter-less

let rows;

//traverse the array

stud.forEach((student)=> {      //student below is similar to an object, it traverses the values in array
                                //stud.forEach(function(student) is replaced with ARROW FUNCTION
                                // anonymous funcion == name of func is irrelevant
                                //ex: const test= ()=>{} ------- test is var of type function ==== function test(){};
rows += `<tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.marks}</td>
        </tr>`
});


//functions on array
//find, filter, sort

}

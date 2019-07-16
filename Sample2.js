//get value from user and add to local storage
//delete specific element from local storage

const addEmp=() =>
{
    document.getElementById("rec").innerHTML = `ID:    <input type="number" id="id"> <br/>
                                                Name:  <input type="text" id="name"><br/>
                                                Email:  <input type="text" id="email"> <br/>
                                                Organisation :  <input type="text" id="org"> <br/>
                                                <input type="submit" value="submit" onclick="pushValue()">`;      
}
const pushValue=()=>
{
    let empGet='';
    empGet = JSON.parse(localStorage.getItem("employees"));
    if(!empGet){
        empGet=[];
        empGet[0] = [id=document.getElementById("id").value,
                    name=document.getElementById("name").value,
                    email=document.getElementById("email").value,
                    organisation=document.getElementById("org").value]; 
    }
    else{
    empGet[empGet.length] = [id=document.getElementById("id").value,
                            name=document.getElementById("name").value,
                            email=document.getElementById("email").value,
                            organisation=document.getElementById("org").value];
    }
    localStorage.setItem("employees",JSON.stringify(empGet));
}

const rmEmp=() =>
{
    document.getElementById("rec").innerHTML = `<input type="email" id="rmVal">
                                                <input type="button" value="Remove" onclick="remove()">`
}
 function remove()
 {
    let rmVal = document.getElementById("rmVal").value;
    let emp1 = JSON.parse(localStorage.getItem("employees"));
    for (var i=0; i<emp1.length; ++i) {
        if (emp1[i][2] == rmVal) 
        { 
            emp1.splice(i, 1);
        }
    }
    
    localStorage.setItem("employees",JSON.stringify(emp1));
}



//TO DISPLAY IN A TABLE FROM ARRAY 

let emps= [ {
            id: 1,
            name: "Jane",
            email: "jane@email.com",
            organisation:"IBM"
            } ,
            {
            id:2,
            name: "Jack",
            email: "jack@email.com",
            organisation:"IBM"
            },
            {
            id:3,
            name: "Robin",
            email: "robn@email.com",
            organisation:"TCS"
            }
        ];

//display details
const showEmp=()=>
{
    let rows='';
    emps.forEach((employee)=>
    {
    rows+=empRow(employee);
    });
document.getElementById("rec").innerHTML= empTable(rows);
}

//create rows
const empRow = (employee)=>
{
    return `<tr><td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.organisation}</td></tr>`
}
//create table with rows
const empTable=(rows)=>
{
    return `<table>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Orgainsation</th>
    </tr>
    ${rows}
    </table>`;
}

//test for sample 3
/*
const empTable=(empGet)=>
{
    let empGet='';
    empGet.forEach((employee)=>
    {
    rows+=empRow(employee);
    });
    document.getElementById("rec").innerHTML= `<table>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Orgainsation</th>
    </tr>
    ${rows}
    </table>`;
}
const empRow = (employee)=>
{
    return `<tr><td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.organisation}</td></tr>`
}*/









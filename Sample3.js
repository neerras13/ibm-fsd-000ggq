//Employee CRUD using JS Classes
//Ref Sample2
let index=0; 
class Employee
{
    adde()
    {
    let empGet='';
        empGet = JSON.parse(localStorage.getItem("employees"));
        if(!empGet){
            empGet=[];
            empGet[0] = [id= document.getElementById("id").value,
                        name=document.getElementById("name").value,
                        email=document.getElementById("email").value,
                        organisation=document.getElementById("org").value]; 
        }
        else{
        let a = document.getElementById("id").value;
        let b = document.getElementById("name").value;
        let c = document.getElementById("email").value;
        let d = document.getElementById("org").value;
        empGet[empGet.length] = [a,b,c,d];
        }
        localStorage.setItem("employees",JSON.stringify(empGet));
        empTable(empGet);
    }    
    rme(){
    let rmVal = document.getElementById("rmVal").value;
    let emp1 = JSON.parse(localStorage.getItem("employees"));
    for (var i=0; i<emp1.length; ++i) {
        if (emp1[i][2] == rmVal) 
        { 
            emp1.splice(i, 1);
        }
    }   
    localStorage.setItem("employees",JSON.stringify(emp1));
    empTable(emp1);
    }
    ede(){
        let empGet='';
        let edVal=document.getElementById("edVal").value;
        empGet = JSON.parse(localStorage.getItem("employees"));
        for(let i=0;i<empGet.length;i++)
        {
           if(empGet[i][2] == edVal)
           {
            index=i;
            document.getElementById("rec").innerHTML= 
                              ` ID:    <input type="number" id="id" value="${empGet[i][0]}"> <br/>
                                Name:  <input type="text" id="name" value="${empGet[i][1]}"><br/>
                                Email: <input type="text" id="email" value="${empGet[i][2]}" readonly> <br/>
                                Organisation :  <input type="text" id="org" value="${empGet[i][3]}"> <br/>
                                <input type="submit" value="Change Record" 
                                onclick="empGet = JSON.parse(localStorage.getItem('employees'));
                                        empGet[index][0]=document.getElementById('id').value;
                                        empGet[index][1]=document.getElementById('name').value;
                                        empGet[index][2]=document.getElementById('email').value;
                                        empGet[index][3]=document.getElementById('org').value;
                                        localStorage.setItem('employees',JSON.stringify(empGet));
                                        empTable(empGet);">`;
           break;
           }
        }
        
    }  
    soe()
    {
        let empGet = JSON.parse(localStorage.getItem("employees"));
        let field_ = document.getElementById("field").value;
        let order_ = document.getElementById("order").value;
        if(order_ == 'asc')
        {
            switch(field_)
            {
                case 'sid': empGet.sort(function sortEmployees(a,b){
                            return a[0]-b[0];
                            });
                            break;
                case 'sname': empGet.sort(function sortEmployees(a,b){
                                if(a[1] < b[1])
                                return -1;
                                });
                                break;
                case 'semail': empGet.sort(function sortEmployees(a,b){
                                if(a[2] < b[2])
                                return -1;
                                });
                                break;
                case 'sorg': empGet.sort(function sortEmployees(a,b){
                                if(a[3] < b[3])
                                return -1;
                                });
                                break;
                default: break;
            }
            localStorage.setItem("employees",JSON.stringify(empGet));
        }
        if(order_ == 'desc')
        {
            switch(field_)
            {
                case 'sid': empGet.sort(function sortEmployees(a,b){
                            return b[0]-a[0];
                            });
                            break;
                case 'sname': empGet.sort(function sortEmployees(a,b){
                                if(a[1] > b[1])
                                return -1;
                                });
                                break;
                case 'semail': empGet.sort(function sortEmployees(a,b){
                                if(a[2] > b[2])
                                return -1;
                                });
                                break;
                case 'sorg': empGet.sort(function sortEmployees(a,b){
                                if(a[3] > b[3])
                                return -1;
                                });
                               break;
                default: break;
            }
            localStorage.setItem("employees",JSON.stringify(empGet));
        }
        empTable(empGet);   
    }
    fie(){
        let empGet={};
        let arr='';
        empGet=JSON.parse(localStorage.getItem("employees"));
        let findVal=document.getElementById("findVal").value;
        empGet.filter((e1)=>{
            return e1[2] == findVal;
        }).forEach((e)=>{
            arr += empRow1(e);
        });
        empTable1(arr);
    }
        
}


const empObj=new Employee();
function addEmp(){
    document.getElementById("rec").innerHTML = `<fieldset><legend>Add a record</legend>
                                                ID:    <input type="number" id="id"> <br/>
                                                Name:  <input type="text" id="name"><br/>
                                                Email:  <input type="text" id="email"> <br/>
                                                Organisation :  <input type="text" id="org"> <br/>
                                                <input type="submit" value="submit" onclick="empObj.adde()"></fieldset>`;
}
function findEmp(){
document.getElementById("rec").innerHTML = `<fielset><legend>Edit details</legend><input type="email" id="findVal" placeholder="Email ID">
                                            <input type="button" value="Search" onclick="empObj.fie()"></fieldset>`
}
function rmEmp(){
    document.getElementById("rec").innerHTML = `<fieldset><legend>Remove a record</legend><input type="email" id="rmVal" placeholder="Email ID">
                                                <input type="button" value="Remove" onclick="empObj.rme()"></fieldset>`
}
function edEmp(){
    document.getElementById("rec").innerHTML = `<fielset><legend>Edit details</legend><input type="email" id="edVal" placeholder="Email ID">
                                                      <input type="button" value="Edit" onclick="empObj.ede()"></fieldset>`
}
function soEmp(){
    document.getElementById("rec").innerHTML = `<fieldset><legend>Sorting the records</legend>
                                                <select id="field">
                                                <option value="">Sort Field</option>
                                                <option value="sid">Sort by ID</option>
                                                <option value="sname">Sort by NAME</option>
                                                <option value="semail">Sort by EMAIL</option>
                                                <option value="sorg">Sort by ORGANISATION</option>
                                                </select>
                                                <select id="order">
                                                <option value="">Sort order</option>
                                                <option value="asc">Ascending</option>
                                                <option value="desc">Descending</option>
                                                </select>
                                                <input type="button" onclick="empObj.soe()" value="Sort">
                                                </fieldset>`
}
function empTable(){
        let rows='';
        empGet = JSON.parse(localStorage.getItem("employees"));
        empGet.forEach((employee)=>
        {
        rows+=empRow(employee);
        });
        document.getElementById("show").innerHTML= `<fieldset><legend>Records</legend>
                                                    <table style="border: 1px solid">
                                                    <tr style="text-align:left">
                                                    <th>ID    </th>
                                                    <th>Name  </th>
                                                    <th>Email </th>
                                                    <th>Orgainsation</th>
                                                    </tr>
                                                    ${rows}
                                                    </table></fieldset>`;
    }
const empRow = (employee)=>
{
    return `<tr style="text-align:left"><td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td>${employee[3]}</td></tr>`
}

//display table using forEach for rows and calling empTable separately
const empRow1 = (e)=>
{
    return `   <tr style="text-align:left"><td>${e[0]}</td>
                                                    <td>${e[1]}</td>
                                                    <td>${e[2]}</td>
                                                    <td>${e[3]}</td></tr>`;

}

function empTable1(arr){
    let arr1 = arr;
    document.getElementById("show").innerHTML= `<fieldset><legend>Records</legend>
                                                <table style="border: 1px solid">
                                                <tr style="text-align:left">
                                                <th>ID    </th>
                                                <th>Name  </th>
                                                <th>Email </th>
                                                <th>Orgainsation</th>
                                                </tr>
                                                ${arr1}
                                                </table></fieldset>`;
}




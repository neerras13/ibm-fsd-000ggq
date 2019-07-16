let index=0;
/*function saveChanges(){
    empGet = JSON.parse(localStorage.getItem("employees"));
    empGet[index][0]=document.getElementById("id").value;
    empGet[index][1]=document.getElementById("name").value;
    empGet[index][2]=document.getElementById("email").value;
    empGet[index][3]=document.getElementById("org").value;
    localStorage.setItem("employees",JSON.stringify(empGet));
}*/  

function ede(){
    let empGet='';
    let edVal=document.getElementById("edVal").value;
    empGet = JSON.parse(localStorage.getItem("employees"));
    for(let i=0;i<empGet.length;i++)
    {
       if(empGet[i][2] == edVal)
       {
        document.getElementById("rec").innerHTML= 
                          ` ID:    <input type="number" id="id" value="${empGet[i][0]}"> <br/>
                            Name:  <input type="text" id="name" value="${empGet[i][1]}"><br/>
                            Email: <input type="text" id="email" value="${empGet[i][2]}" readonly> <br/>
                            Organisation :  <input type="text" id="org" value="${empGet[i][3]}"> <br/>>`;
       index=i;
       break;
       }
    }
    
} 
function edEmp(){
    document.getElementById("rec").innerHTML = `<input type="email" id="edVal" value="Email ID">
                                                <input type="button" value="Remove" onclick="ede()">`
}
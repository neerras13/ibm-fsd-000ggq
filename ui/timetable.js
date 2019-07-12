const occupied='';
let skills = {};
let trainer = '';
let rowID='', value='',sl='';

//display form to enter trainer data
function typeForm(id,val,slot,clas)
{
    //If trainer is already assigned, edit can be done
    if(document.getElementsByClassName(clas).value)
    {
    document.getElementById("form").innerHTML = `<fielset><legend>Edit details</legend><input type="email" id="edVal" placeholder="Trainer name">
    <input type="button" value="Edit" onclick="editForm()"></fieldset>`;
    }
    
    sl=slot;
    rowID=id;
    value=val;
    document.getElementById("form").innerHTML= 
                `<fieldset><legend>Details</legend>
                Subject: <select id="subject">
                        <option value="">Subjects</option>
                        <option value="English">English</option>
                        <option value="Maths">Maths</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="French">French</option>
                    </select><br />
                Trainer name: <input type="text" id="tname"><br />
                Trainer email: <input type="email" id="temail"><br />
                Trainer skills: <br />
                <input type="checkbox" id="engc" value="English"> English <br />
                                <input type="checkbox" id="matc" value="Maths"> Maths<br />
                                <input type="checkbox" id="phyc" value="Physics"> Physics<br />
                                <input type="checkbox" id="chemc" value="Chemistry"> Chemistry<br />
                                <input type="checkbox" id="bioc" value="Biology"> Biology<br />
                                <input type="checkbox" id="frenc" value="French"> French<br />
                <input type="button" id="submitc" value="Set data" onclick="setDetails()">`
                //<input type="button" id="submit" value="Set trainer for subject">`
                
}

//save details to localStorage
function setDetails()
{
    skills.occupied = '';
    skills.subject = '';
    skills.email = document.getElementById("temail").value; 
    let sub = document.getElementById("subject").value;
    if(!document.getElementById("tname").value)
    {
        alert("Enter Trainer name");
        typeForm();
    }
    let key = document.getElementById("tname").value;
    if(document.getElementById("engc").checked == true)
    {
    skills.subject += 'English';
    }
    if(document.getElementById("matc").checked == true)
    {
        skills.subject += 'Maths';
    }
    if(document.getElementById("phyc").checked == true)
    {
        skills.subject += 'Physics';
    }
    if(document.getElementById("chemc").checked == true){
    skills.subject += 'Chemistry';
    } 
    if(document.getElementById("bioc").checked == true){
    skills.subject += 'Biology';
    }
    if(document.getElementById("frenc").checked == true){
    skills.subject += 'French';
    }
    localStorage.setItem(key,JSON.stringify(skills));
    checkTT(sub,key);
}

//check if trainer is available and eligible
function checkTT(sub,key)
{
    //let i=0;
    let arr = JSON.parse(localStorage.getItem(key));
    //alert(arr.subject);
        if(arr.subject.includes(sub))
        {
            if(skills.occupied != 'YES')
            {
                tabShow(key,sub);
                skills.occupied = 'YES';
                localStorage.setItem(key,JSON.stringify(skills));
            }
        }
        else
        {
            alert("Trainer does not have the required skill")
            typeForm(rowID,value);
        }
       
    }  

//display assigned trainer and subject
function tabShow(key,sub){
    document.getElementById(rowID).innerHTML = 
    `<td><input type="button" id="${sl}" onclick="typeForm('${rowID}',this.value,this.id,this.class)" value="${value}"></td>                   
    <td class="td${sl}"> ${sub}</td><td class="td${sl}"> ${key}</td>`;

}

//edit timetable row
function editForm()
{
    
    Object.keys(localStorage).forEach((key)=>{
        if(key == document.getElementById("edVal").value)
         trainer=key;
    });
    let empGet='';
        empGet = JSON.parse(localStorage.getItem(trainer));
        document.getElementById("form").innerHTML= 
                              ` Subject:    <input type="number" id="id" value="${empGet.subject}"> <br/>
                                Name:  <input type="text" id="name" value="${trainer}"><br/>
                                Email: <input type="text" id="email" value="${empGet.email}" readonly> <br/>
                                <input type="submit" value="Change Record" 
                                onclick="empGet = JSON.parse(localStorage.getItem(${trainer}));
                                        empGet[0]=document.getElementById('id').value;
                                        empGet[1]=document.getElementById('name').value;
                                        empGet[2]=document.getElementById('email').value;
                                        localStorage.setItem(${trainer},JSON.stringify(${empGet}));">`
        empTable(empGet);
}

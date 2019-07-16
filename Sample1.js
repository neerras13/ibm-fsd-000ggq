//Student marks - Pass, fail and distinction
function calculateResult(){
let rows='';
let marks=[0,0,0];
let subs=['Maths','English','Computer science'];
let res=['','',''];
marks[0] = document.getElementById("mat").value;
marks[1] = document.getElementById("eng").value;
marks[2] = document.getElementById("cs").value;

if( marks[0] >= 80 )
res[0]='Distinction';
else if(marks[0] < 80 && marks[0] >= 60)
res[0] = "Grade B"
else
res[0] = "Fail";


if(marks[2] >= 80)
res[2]="Distinction";
else if(marks[2] < 80 && marks[2] >= 60)
res[2]="Grade B";
else
res[2]="Fail";


if(marks[1] >= 80)
res[1]="Distinction"; 
else if(marks[1] < 80 && marks[1] >= 60)
res[1]= "Grade B";
else
res[1]="Fail";  

for(i=0;i<3;i++)
{
    rows += `<tr align="center">
            <td>${subs[i]}</td>
            <td>${marks[i]}</td>
            <td>${res[i]}</td>
        </tr>`
}
  

let tab =  `<tr>
            <th> Subject</th> 
            <th>Marks scored</th>
            <th>Result</th>
            </tr>
            ${rows}        
            `  

document.getElementById("123").innerHTML= tab;
}
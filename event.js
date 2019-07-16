messages = ['hi','hello','Hola'];
function clickMe(){
    const name = document.getElementById('name');
    alert(`Hello, ${name.value}!`);
    name.value='Raghava';
    let rows;
    for(let m in messages){
        rows +=`<tr>
                <th>${m+1}</th>
                <th>${messages[m]}</th>
                </tr>`;
    }
    let _table =`<table>
                <tr>
                <th>S.No</th>
                <th>Message</th>
                </tr>
                ${rows}
                </table>`;
    document.getElementById('msgs').innerHTML =_table;
}

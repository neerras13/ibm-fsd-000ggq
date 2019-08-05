var turn=1;
function display(id){
    if(turn%2 == 0)
    {
      document.getElementById(id).innerHTML="X";
    turn++;
    }
    else{ 

    document.getElementById(id).innerHTML="O";
    turn++;
    }
    var res=checkWinner();

    if(res=='X')
    alert("Player 2 wins!");
    if(res=='O')
    alert("Player 1 wins!");
    if(turn == 10 && res == -1)
    alert("Match is a draw");
    
}
 function checkWinner(){
    var td1 = $("#dashboard tr:nth-child(1) td:nth-child(1)").text();
    var td2 = $("#dashboard tr:nth-child(1) td:nth-child(2)").text();
    var td3 = $("#dashboard tr:nth-child(1) td:nth-child(3)").text();
    var td4 = $("#dashboard tr:nth-child(2) td:nth-child(1)").text();
    var td5 = $("#dashboard tr:nth-child(2) td:nth-child(2)").text();
    var td6 = $("#dashboard tr:nth-child(2) td:nth-child(3)").text();
    var td7 = $("#dashboard tr:nth-child(3) td:nth-child(1)").text();
    var td8 = $("#dashboard tr:nth-child(3) td:nth-child(2)").text();
    var td9 = $("#dashboard tr:nth-child(3) td:nth-child(3)").text();
    if  ((td1==td2)&&(td2==td3)) 
    { 
        return td3;
    }
    else if ((td4==td5)&&(td5==td6)) 
    { return td6; }
    else if ((td7==td8)&&(td8==td9)) 
    { return td9; }
    else if ((td1==td4)&&(td4==td7)) 
    { return td7; }
    else if ((td2==td5)&&(td5==td8)) 
    { return td8; }
    else if ((td3==td6)&&(td6==td9)) 
    { return td9; }
    else if ((td1==td5)&&(td5==td9)) 
    { return td9; }
    else if ((td3==td5)&&(td5==td7)) 
    { return td7; }
    else
    return -1;
 }

 function storeGame(){

    const state = {
        td1 : `${$("#dashboard tr:nth-child(1) td:nth-child(1)").text()}`,
        td2 : `${$("#dashboard tr:nth-child(1) td:nth-child(2)").text()}`,
        td3 : `${$("#dashboard tr:nth-child(1) td:nth-child(3)").text()}`,
        td4 :`${$("#dashboard tr:nth-child(2) td:nth-child(1)").text()}`,
        td5 : `${$("#dashboard tr:nth-child(2) td:nth-child(2)").text()}`,
        td6 : `${$("#dashboard tr:nth-child(2) td:nth-child(3)").text()}`,
        td7 : `${$("#dashboard tr:nth-child(3) td:nth-child(1)").text()}`,
        td8 : `${$("#dashboard tr:nth-child(3) td:nth-child(2)").text()}`,
        td9 : `${$("#dashboard tr:nth-child(3) td:nth-child(3)").text()}`
    };
    const url="http://localhost:2329/store"
    fetch(url,{
        method : 'POST',
        body: JSON.stringify(state),
        headers: { 'Content-type': 'application/json' }
    })
    .then(res=>res.json());
    
    
 }

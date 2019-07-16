//create calculator using classes and inheritance

let index=0;
function getVal()
    {
        let val='',val2='',op='';
        let str=document.getElementById("data").value;
        for(let i=0;i<str.length;i++)
        {
            if(str[i]=='+' || str[i]=='-'|| str[i]=='*'|| str[i]=='/')
            {
                op=str[i];
                index=i;
                break;
            }
            else
            {
                val += str[i];
            }
        }
        for(let i=index+1;i<str.length;i++)
        {
            val2 += str[i];
        }
        calcVal(val,val2,op);
    }

function calcVal(val,val2,op){
        val=parseInt(val);
        val2=parseInt(val2);
        switch(op)
        {
            case '+': document.getElementById("data").value = val+val2;
                        break;
            case '-':  document.getElementById("data").value = val-val2 ;
                        break;
            case '*': document.getElementById("data").value = val*val2;
                        break;
            case '/': document.getElementById("data").value = val/val2;
                        break;
            default: break;
        }
    }

function setVal(val)
{
    document.getElementById("data").value += val; 
}
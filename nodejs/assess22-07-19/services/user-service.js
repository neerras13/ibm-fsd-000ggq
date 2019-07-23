const users = require('../dbs/users').users;
const items=require('../dbs/items').Clothes;

class Service
{
    login(email,pass){
        this.email =email;
        this.pass =pass;
        let a;
        for(let i=0;i<2;i++){
            if(users[i][0] == email && users[i][1] == pass){
                 a=users[i][0];
              }
              else{
                  a=''; 
              }
        }
        return a;
    }
    modify(item,quantity)
    {
        this.quantity=quantity;
        this.item = item;
        items.forEach(u).find(()=>{
            if(u.item == item)
            {
                u.qAvail = u.qAvail-quantity;
            }
        })
    }
}

module.exports.Service = Service;
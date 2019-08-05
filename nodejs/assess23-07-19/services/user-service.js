const users = require('../dbs/users').users;
const items=require('../dbs/items').items;

class Service
{
    login(email,pass)
    {
        return users.find((u)=>{
                return u.email == email && u.pass == pass
            });
        }

    
    modify(item,quantity)
    {
        this.quantity=quantity;
        this.item = item;
        items.forEach((it)=>{
        it.find((u)=>{
            if(u.item == item)
            {
                u.qAvail = u.qAvail-quantity;
                return u.item;
            }
        })
    });
    }
}

module.exports.Service = Service;






let selected = 0;

function trainlist()
{
                let rows= ``;
                for(let i=0;i<4;i++)
                { rows+= `<option value="${items[i]}">${items[i]}</option>`;
                }
                  document.getElementById("listt").innerHTML = `${rows}
                                                            </select>`;                                        
                                                        
}

function itemlist()
{
    let rows=``;
    const category = document.getElementById('listt').value;
    switch(category){
        case 'Appliances':  for(let i=0;i<3;i++)
                            { rows+= `<option value="${Appliances1[i]}">${Appliances1[i]}</option>`;
                            }
                            document.getElementById("itlist").innerHTML = `${rows}
                                                                        `;
                            break;
        case 'Clothes':  for(let i=0;i<3;i++)
                            { rows+= `<option value="${Clothes1[i]}">${Clothes1[i]}</option>`;
                            }
                            document.getElementById("itlist").innerHTML = `${rows}
                                                                        `;
                            break;
        case 'Books':  for(let i=0;i<3;i++)
                            { rows+= `<option value="${Books1[i]}">${Books1[i]}</option>`;
                            }
                            document.getElementById("itlist").innerHTML = `${rows}
                                                                        `;
                            break;
        case 'Stationary':  for(let i=0;i<3;i++)
                            { rows+= `<option value="${Stationary1[i]}">${Stationary1[i]}</option>`;
                            }
                            document.getElementById("itlist").innerHTML = `${rows}
                                                                        `;
                            break;
        
        default:  break;
    }
}

function additem(){
    selected=selected+1;
    const uid=document.getElementById("uid").value;
    const item=document.getElementById("itlist").value;
    const quantity=document.getElementById("quantity").value;
    localStorage.setItem(`${uid}`,`{item: ${item},quantity: ${quantity}}`);
    document.getElementById("select").innerHTML = `<input type="text" value="Cart Items=${selected}" readonly>`
    const url="http://localstorage:1234/item";
    fetch(url,{
        method: 'GET'
    })
    .then(res=>res.json());
}














































const Clothes1=['Jeans','T Shirt','Tunic'];
const Appliances1=['Trimmer','Iron Box','Blow Dry'];
const Books1=['Harry Potter','ABC Murders','If Tomorrow Comes'];
const Stationary1=['Ball point pen','Notebook','Pencil'];
const items=['Appliances','Clothes','Books','Stationary'];    
const Appliances= 
[
    {
        id: 1,
        item: 'Trimmer',
        Brand: 'Philips',
        price:100,
        qAvail: 10
    },
    {
        id: 2,
        item: 'Iron box',
        Brand: 'Morphy richards',
        price:350,
        qAvail: 8
    },
    {
        id: 3,
        item: 'Blow Dry',
        Brand: 'Vega',
        price:200,
        qAvail: 9
    }

];
const Clothes=
[
    {
        id: 4,
        item: 'Jeans',
        Brand: 'Levi',
        price: 500,
        qAvail: 10
    },
    {
        id: 5,
        item: 'T Shirt',
        Brand: 'SuperDry',
        price: 150,
        qAvail: 12
    },
    {
        id: 6,
        item: 'Tunic',
        Brand: 'Biba',
        price: 300,
        qAvail: 10
    }
];
const Books=
[
    {
        id: 7,
        item: 'Harry Potter',
        Brand: 'J K Rowling',
        price: 150,
        qAvail: 5
    },
    {
        id: 8,
        item: 'ABC murders',
        Brand: 'Agatha Christie',
        price: 125,
        qAvail: 10
    },
    {
        id: 9,
        item: 'If tomorrow comes',
        Brand: 'Sidney Sheldon',
        price: 200,
        qAvail: 9
    }       
];
const Stationary=
[
    {
        id: 10,
        item: 'Ball point pen',
        Brand: 'Rorit0',
        price: 50,
        qAvail: 10
    },
    {
        id: 11,
        item: 'Notebook',
        Brand: 'Classmate',
        price: 70,
        qAvail: 12
    },
    {
        id: 12,
        item: 'Pencil',
        Brand: 'Apsara',
        price: 20,
        qAvail: 12
    }
];   

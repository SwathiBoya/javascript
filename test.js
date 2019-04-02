(function(){
    `use strict`;
    var x;
    x = [
            {
                id:1,
                price:100,
                name:"abc"
            },
            {
                id:2,
                price:300,
                name:"xyz"
            },
            {
                id:3,
                price: 400,
                name:"234"
            },
            {
                id:4,
                price: 100,
                name:"567"
            }

        ];
    // for(var i= 0; i<x.length; i++){
    //     if(x[i].price >100){
    //         console.log(x[i].price +" "+ x[i].name);
    //     }
    // }

    let filterArr =x.filter((item,index)=>{
        return item.price>100;
    })

    console.log(filterArr);

    let y;
    x.filter(y=>y.price>100);
    console.log(y);

    let z = x.map((item,index)=>{
        if(item.price>100){
            let product =item;
            product.positon = index;
            return product;
        }
    })
    console.log(z);

    // let finalArray = x.filter((item,index)=>{
    //     return item.price>100;
    // }).map((item,index)=>{
    //     return item.positon = index;
    // })

    let finalArray = x.filter((item,index)=>{
        item.positon = index;
        return item.price >100;
    })
    console.log(finalArray);

    let findArray = x.find((item,index)=>{
        item.positon = index;
        return item.price >100;
    })
    console.log(findArray);
    
    
})();

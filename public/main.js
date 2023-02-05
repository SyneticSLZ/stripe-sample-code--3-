let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {price,name,cost,desc,image} = x;
        let search = basket.find((x)=>x.price === price) || [];
        return `

        <div class="v5_110" id=product-id-${price}>
                <div class="v5_111" id=product-id-${price}></div>
                
                <div><span class="v5_112">VARITY</span></div>
                <div class="v5_113"></div>
                <div><span class="v5_114" >${name}</span></div>
            
               <div  class="v5_115" id="${price}" >
                    
                    <button onclick="increment(${price})" class="v5_117" type="button">Add to cart</button>

                </div>

               <!--<span class="v5_116">ADD TO CART </span> <div id="${price}" ><button onclick="increment(${price})" class="v5_115 v5_116 v5_117" type="button">Add to cart</button></div>-->
            
                <div><span class="v5_118">ORIGINALS</span></div>
                
        </div>

       <!-- <div id=product-id-${price} class="col-4 item">
                <img src=${image} alt="">
                <h4>${name}</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>${cost}</p>
                <div class="buttons">
                    <i onclick="increment(${price})" class=""bi bi-plus-square-dotted">+</i>
                    <div id=${price}  class="quantity"> ${search.quantity === undefined? 0: search.quantity}</div>
                    <i onclick="decrement(${price})" class="bi bi-dash-lg">-</i><br> 
                    <button onclick="increment(${price})" class="btn" type="button">Add to cart</button>
                </div>
            </div> -->


            
        `
    }).join(""));
};

generateShop();


let increment = (price)=>{
    
    let selectedItem = price;
    let search = basket.find((x)=>x.price === selectedItem.id)

    if(!search){
        console.log(selectedItem.id, "eirnewinr")
        basket.push({
            price: selectedItem.id,
            quantity: 1,
        });
    }
    else{
        search.quantity += 1;
    }
    
    //console.log(basket)
    update(selectedItem.id);

    localStorage.setItem("data", JSON.stringify(basket))
};
let decrement = (price)=>{
    let selectedItem = price;
    let search = basket.find((x)=>x.price === selectedItem.id)

    if(!search) return;  /*=== undefined */
    else if(search.quantity === 0) return;
    else{
        search.quantity -= 1; 
    }
    
    update(selectedItem.id);

    basket = basket.filter((x)=>x.quantity !== 0);
    //console.log(basket)
    
    localStorage.setItem("data", JSON.stringify(basket));
};
let update = (price)=>{
    let search = basket.find((x)=>x.price === price);

    document.getElementById("cart-amount").innerHTML = search.price;
    calculation();
};

let calculation =()=>{
    let cartIcon = document.getElementById("cart-amount")
    cartIcon.innerHTML = basket.map((x)=>x.quantity).reduce((x,y)=> x + y ,0);
    
}

calculation();
let shop = document.getElementById('shopping');
// let buttontext = document.getElementsByclass('addtocart')
let buttontext = Array.from(document.querySelectorAll('.addtocart'));
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {price,name,cost,desc,image,product,himage} = x;
        let search = basket.find((x)=>x.price === price) || [];
        return `




        <!--<div class="v5_110 col-3" id=product-id-${price}>
      
                <div class="v5_111" id=product-id-${price}></div>
                
                <div><span class="v5_112 hover-color">VARITY</span></div> 
                <div class="v5_113"></div>
                <p class="hover-color" >${name}</p> 
                
    
            
                <span class="v5_118 hover-color"><a href="${product}.html">ORIGINALS</a></span> 
    
                
        </div> -->

    <div class="product-section" id=product-id-${price}>
      <img class="product-image" src="${image}" alt="Product Image">
      <img class="product-image1" src="${himage}" alt="Product Image">

      <div class="product-info">

        <div class="brand">ORIGINALS</div>
        <div class="product-name"><a href="${product}"> ${name} </a></div>
        <div class="product-button">ADD TO CART</div>
      </div>
    </div>

        `
    }).join(""));
};

generateShop();

/*
Fetch the buttom element
*/
const button = document.body.querySelector('[data-target="#collapseExample"]');

/*
Add click event listener where we will provide logic that updates the button text
*/
button.addEventListener('click', function() {
  
  /*
  Update the text of the button to toggle beween "More" and "Less" when clicked
  */
//   if(button.innerText === 'less') {
     button.innerText = 'ADDED TO CART';
//   }
//   else {
//     button.innerText = 'Less';
//   }
});

let increment = (price)=>{
    
    let selectedItem = price;
    let search = basket.find((x)=>x.price === selectedItem.id)

    if(!search){
        // console.log(selectedItem.id, "eirnewinr")
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
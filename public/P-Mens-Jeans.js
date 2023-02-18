let addtocartbutton = document.getElementById('add-to-cart');
let buttontext = document.getElementsByClassName('addtocart')
let basket = JSON.parse(localStorage.getItem("data")) || [];

let price = "price_1MXSfJKJeZAyw8f4LpeMgTl9"

let generateitem = ()=>{

    addtocartbutton.innerHTML = `

    <div id="${price}" class="addtocart" >
                    
        <a href="cart.html" onclick="increment(${price})" class="btn addtocart" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Add to Cart</a>
                    
    </div> 


    `;
}

generateitem();

let buttontextchange = ()=>{
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
};


let increment = (price)=>{
    
    let selectedItem = price;
    console.log(price)
    let search = basket.find((x)=>x.price === selectedItem.id)

    if(!search){

        basket.push({
            price: selectedItem.id,
            quantity: 1,
            
        });
    }
    else{
        search.quantity += 1;
    }

    update(selectedItem.id);

    localStorage.setItem("data", JSON.stringify(basket))
    console.log("added ")
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


 // Add JavaScript for the tab functionality here
 const descriptionTab = document.getElementById("description-tab");
 const specificationsTab = document.getElementById("specifications-tab");
 const descriptionContent = document.getElementById("description-content");
 const specificationsContent = document.getElementById("specifications-content");

 descriptionTab.addEventListener("click", function() {
   descriptionTab.classList.add("active");
   specificationsTab.classList.remove("active");
   descriptionContent.classList.add("active");
   specificationsContent.classList.remove("active");
 });

 specificationsTab.addEventListener("click", function() {
   specificationsTab.classList.add("active");
   descriptionTab.classList.remove("active");
   specificationsContent.classList.add("active");
   descriptionContent.classList.remove("active");
 });


 
 var ProductImg = document.getElementById("ProductImg");
 var SmallImg = document.getElementsByClassName("small-img");

 SmallImg[0].onclick = function(){
     ProductImg.src = SmallImg[0].src;
 }
 SmallImg[1].onclick = function(){
     ProductImg.src = SmallImg[1].src;
 }
 SmallImg[2].onclick = function(){
     ProductImg.src = SmallImg[2].src;
 }
 SmallImg[3].onclick = function(){
     ProductImg.src = SmallImg[3].src;
 }
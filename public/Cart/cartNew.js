let CartProduct = document.getElementById("cart-product");
let Table = document.getElementById("table");
let cartContainer = document.getElementById("cart-container");
let TotalAmount = document.getElementById('TotalAmount');
let subAmount = document.getElementById('subtotal');
let FinalAmount = document.getElementById('FinalCost');

let basket = JSON.parse(localStorage.getItem("data")) || [];
  
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
    
    generateCartItems();
    totalAmount();
    calculation();
    update(selectedItem.id);

    localStorage.setItem("data", JSON.stringify(basket))
};


let decrement = (price)=>{
    let selectedItem = price;
    let search = basket.find((x)=>x.price === selectedItem.id)
    console.log(!search)
    if(!search) {
        removeItem(price);
        localStorage.setItem("data", JSON.stringify(basket));
        generateCartItems();
    totalAmount();
    calculation();
     /*=== undefined */
    }
    else if(search.quantity === 1) {
        removeItem(price);
        localStorage.setItem("data", JSON.stringify(basket));
        generateCartItems();
    totalAmount();
    calculation();
    }
    else{
        search.quantity -= 1; 
    }
    
    update(selectedItem.id);

    basket = basket.filter((x)=>x.quantity !== 0);
    
    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems();
    totalAmount();
    calculation();
};

let update = (price)=>{
    let search = basket.find((x)=>x.price === price);
    document.getElementById(price).innerHTML = search.quantity;
    calculation();
    totalAmount();
};

let removeItem = (price)=>{
    let selectedItem = price;
    basket = basket.filter((x)=>x.price !== selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems();
    totalAmount();
    calculation();
}
let clearCart = ()=>{
    basket = [];
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
    totalAmount();
    calculation();
    generateCartItems();
}

let calculation =()=>{
    let cartIcon = document.getElementById("cart-amount")
    cartIcon = basket.map( (x)=> x.quantity ).reduce((x,y)=> x + y ,0);
    
}

calculation();

let generateCartItems = ()=>{
    if(basket.length !==0){

        Table.innerHTML = `
        
        ${(innerHTML= basket.map((x)=>{ 
            let {price, quantity} = x;
            let search = shopItemsData.find((y)=>y.price === price) || [];
            // console.log(search)
            return `
            <div class="cart-product" id="cart-product">
            <div class="cart-img">
                <img src=${search.image} width="90%" height="70%">
            </div>

            <div class="cart-details">

                <div class="name-quantity-price">
                    <div class="name">${search.name} - ${search.size}</div>

                    <div class="qp">

                        <div class="select">
                            <!--<img src="images/down-arrow (1).png" width="15px" height="15px" id="dropdownIcon">-->
                            <select id="quantitySelect">
                                <option value="0" onclick="removeItem(${price})">0</option>
                                <option value="1" onclick="selectq(${price})">1</option>
                                <option value="2" onclick="selectq(${price})">2</option>
                                <option value="3" onclick="selectq(${price})">3</option>
                            </select>
                        </div>

                        <!--<div class="select" id="select">
                            <span id="quantityValue">0</span>
                            <img src="../images/down-arrow (1).png" width="15px" height="15px" alt="Dropdown Icon" id="dropdownIcon">
                            <select id="quantitySelect">
                                <option value="0" onclick="removeItem(${price})">0</option>
                                <option value="1" onclick="selectq(${price})">1</option>
                                <option value="2" onclick="selectq(${price})">2</option>
                                <option value="3" onclick="selectq(${price})">3</option>
                            </select>
                        <input type="number" id="quantityInput" min="1" max="9999" step="1">
                        </div>-->


                        <div class="price-remove" id=${price}>
                    
                            <div class="price">£${search.cost}</div>
                            <div class="remove" onclick="removeItem(${price})">Remove</div>
                        </div>
                    </div>
                </div>
                <div class="delivery">
                    <div class="delivery-icon">
                        <img src="../images/box.png" height="80%" width="100%">
                    </div>
                    <div class="col">
                        <div>Order today</div>
                        <div class="bold">Tue 18 Apr — Free</div>
                    </div>
                </div>
            </div>


       <!-- <tr>
            <td class="row-product">
                
                <div class="cart-info">

                    <img src=${search.image} alt="">

                    <div>
                        <p>${search.name}</p>
                        <small>Size ${search.size}</small>
                        <br>
                    </div>

                </div>

            </td>


            <td class="other-row"><span class="vsd" >£${search.cost}</span></td>


            <td class="other-row">
                <div class="buttons">
                    <span onclick="decrement(${price})">-</span>
                    <div id=${price}> ${quantity}</div>
                    <span onclick="increment(${price})">+</span>
                </div>
            </td>


            <td class="other-row">£${quantity*search.cost}</td>


            <td class="other-row">
            <div class="otherrowaa"> <span href="" onclick="removeItem(${price})">X</span></div>
            </td>


        </tr> -->
            
        </div>
        `
    }).join(""))}

`;

}
    else{
        cartContainer.innerHTML = `

        <div class="bag-total">
            <h2 class="total" >Your Cart is Empty</h2>
            <a href="index.html" class="check-out">Continue Shopping</a>
        </div>

        `;
        // cartContainer.style.display = 'none';
    }
};

generateCartItems();

let totalAmount = () => {

    if(basket.length === 0) {return;}
    else {
        let amount = basket.map((x) => {
            let { quantity, price } = x;
            let search = shopItemsData.find((y) => y.price === price) || [];
            // console.log(search.cost)
            return quantity * search.cost;
        })
        .reduce((x,y) => x + y,0);
        console.log(amount + 'sdas')

        TotalAmount.innerText ='£' + amount;
        subAmount.innerText ='£' + amount;
        FinalAmount.innerText ='£' + amount;
        
    }
    // for (let i = 0; i < TotalAmounts.length; i++) {
    //     TotalAmounts[i].innerText ='£' + amount;
    //     console.log(i)
    // }
    }
totalAmount();



const YOUR_DOMAIN = 'http://localhost:4242';

const button = document.querySelectorAll(".check-out")
for (let i = 0; i < button.length; i++) {
button[i].addEventListener("click", () => {
    console.log("dhgudsgudgasdas")

    fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: basket
    }),

    }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    }).then(({ url }) => {
        window.location =url
    }).catch(e => {
        console.error(e.error)
    })
})
}
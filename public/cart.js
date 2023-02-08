let label = document.getElementById('label');
let ShoppingCart = document.getElementById("shopping-cart");
let Table = document.getElementById("table");
let myCart = document.getElementById("my-cart");
let CartContainer = document.getElementById("cart-page");


let basket = JSON.parse(localStorage.getItem("data")) || [];

let shopItemsData = [
    {
    
        price: "price_1MXSxGKJeZAyw8f48U3ApmwS",
        name: "FEMALE T-SHIRT",
        cost: 15,
        desc: "lorem ispum dsofis aoafjpa",
        image: "images/product-1.jpg"
    },
    {
        price: "price_1MXSrDKJeZAyw8f4XZmQKGF4",
        name: "MENS HOODIE",
        cost: 45,
        desc: "lorem ispum dsofis aoafjpa",
        image: "images/product-2.jpg"
    },
    {
        price: "price_1MXSqUKJeZAyw8f46H1JNPHD",
        name: "FEMALE HOODIE",
        cost: 45,
        desc: "lorem ispum dsofis aoafjpa",
        image: "images/product-3.jpg"
    },
    {
        price: "price_1MXSfJKJeZAyw8f4LpeMgTl9",
        name: "MENS JEANS",
        cost: 30,
        desc: "lorem ispum dsofis aoafjpa",
        image: "images/product-4.jpg"
    },
    {
        price: "price_1MXSeyKJeZAyw8f4qfbHTGhc",
        name: "FEMALE JEANS",
        cost: 30,
        desc: "lorem ispum dsofis aoafjpa",
        image: "images/product-4.jpg"
    },
    {
        price: "price_1MQGCcKJeZAyw8f4y2agJhuS",
        name: "MENS T-SHIRT",
        cost: 30,
        desc: "lorem ispum dsofis aoafjpa",
        image: "images/product-4.jpg"
    },
  ];    
  
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

    if(!search) return;  /*=== undefined */
    else if(search.quantity === 0) return;
    else{
        search.quantity -= 1; 
    }
    
    update(selectedItem.id);

    basket = basket.filter((x)=>x.quantity !== 0);
    generateCartItems();
    totalAmount();
    calculation();
    
    localStorage.setItem("data", JSON.stringify(basket));
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
    cartIcon.innerHTML = basket.map( (x)=> x.quantity ).reduce((x,y)=> x + y ,0);
    
}

calculation();

let generateCartItems = ()=>{

    if(basket.length !==0){
        myCart.innerHTML = `
        
            
            <span class="v5_92">My Cart</span>
            <div class="v5_91"></div>
        `
        Table.innerHTML = `
        
        <div class="top" id="top">
        <tr>
            <th class="row-product" >Product</th>          <!-- product =50% of row, price,qnty,total,remove = other 50% --- 12.5% each  -->
            <th class="other-row">Price</th>
            <th class="other-row">Quantity</th>
            <th class="other-row">Total</th>
            <th class="other-row"><div></div></th>
        </tr>
        </div>
        <div id="shopping-cart" class="shopping-cart">${(innerHTML= basket.map((x)=>{ 
            let {price, quantity} = x;
            let search = shopItemsData.find((y)=>y.price === price) || []
            // console.log(search)
            return `
        <tr>
            <td class="row-product">
                
                <div class="cart-info">

                    <img src=${search.image} alt="">

                    <div>
                        <p>${search.name}</p>
                        <small>Ref:348326924698</small>
                        <br>
                    </div>

                </div>

            </td>


            <td class="other-row"><span class="vsd" >£30.00</span></td>


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


        </tr>

       
        `
    }).join(""))}
    </div>
    

`;

}
    else{
        Table.innerHTML = `

        <h2 class="title">Cart is empty</h2>
        <a href="products.html" class="a">
            <button class="btn"> back to shop </button>
        </a>

        `;
        myCart.innerHTML = ``;
        CartContainer.innerHTML = `
        `;
    }
};

generateCartItems();


let totalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket.map((x) => {
            let { quantity, price } = x;
            let search = shopItemsData.find((y) => y.price === price) || [];
            // console.log(search.cost)
            return quantity * search.cost;
        })
        .reduce((x,y) => x + y,0);
        console.log(amount)
        label.innerHTML = `

        <tr><div class="verysmallcontainer">
            <div class="check"></div>
            <div><p>SubTotal £${amount}</p></div>
            <div><button id="click" class="v5_117" onclick="getInfo()">Checkout</button></div>
        </div></tr>




        <!-- <div class="total-price">

        <table>
            <tr>
                <td>Subtotal</td>
                <td>£${amount}</td>
            </tr>
            <tr>
                <td>Shipping</td>
                <td>£200</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>£${amount + 200}</td>
            </tr>
            <tr>
            <form action="/create-checkout-session" method="POST">
            <button type="submit" id="checkout-button" class="btn" onclick="checkoutintent()" >Checkout</button>
            </form> 
                <button class="btn" onclick="clearCart()" id="checkout" >Clear Cart</button>
            </tr>
            <tr><form action="/create-checkout-session" method="POST">
            <button type="submit" id="checkout-button">Checkout</button>
          </form></tr>
        </table>
    </div> -->

        `;
    }
    else return
    }
totalAmount();


const YOUR_DOMAIN = 'http://localhost:4242';

const getBtn = document.getElementById('get')

getBtn.addEventListener('click', getInfo)

async function getInfo(e) {

    //console.log(JSON.stringify(basket))
    // const response = await fetch(YOUR_DOMAIN, {
    //     method: 'POST',
    //     body: JSON.stringify(basket),
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
        
    // });

    fetch("/create-checkout-session", {
            method: 'POST',
            
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(basket),
    });
}

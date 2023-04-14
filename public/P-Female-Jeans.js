var parralax = true
let addtocartbutton = document.getElementById('add-to-cart');
let addtocartbutton2 = document.getElementById('add-to-cart2');
let buttontext = document.getElementsByClassName('addtocart')
let basket = JSON.parse(localStorage.getItem("data")) || [];

let price = "price_1MXSeyKJeZAyw8f4qfbHTGhc"

let generateitem = ()=>{

    addtocartbutton.innerHTML = `

    <div id="${price}" class="addtocart" >
                    
        <a href="Cart.html" onclick="increment(${price})" class="btn addtocart" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Add to Cart</a>
                    
    </div> 


    `;
    addtocartbutton2.innerHTML = `

    <div id="${price}" class="addtocart" >
                    
        <a href="Cart.html" onclick="increment(${price})" class="btn addtocart" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Add to Cart</a>
                    
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

 function splitscroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    // .addIndicators()
    .addTo(controller);
}
splitscroll();

// JavaScript code
// function checkScreenSize() {
//     // Get the viewport width
//     var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    
//     // Check if the viewport width is less than 600px
//     if (viewportWidth < 600) {
//       // Remove the class from the div
//     //   document.getElementById('parallax').classList.remove('about-title-parralax');
//     //   document.getElementById('parallax').classList.add('about-title');
//     } else {
//       // Add the class to the div
//     //   document.getElementById('parallax').classList.remove('about-title');
//     //   document.getElementById('parallax').classList.add('about-title-parralax');
//       splitscroll();
//     }
//   }
  
  // Call the function initially
//   checkScreenSize();
  
  // Add an event listener for window resize
  window.addEventListener('resize', checkScreenSize);

  
// Get DOM elements
const titleElement = document.querySelector('.title');
const plusButtonElement = document.getElementById('plusButton');
const contentBoxElement = document.getElementById('contentBox');
const uparrow = document.getElementById('up');
const downarrow = document.getElementById('down');
const contentTextAreaElement = document.getElementById('contentTextArea');
const saveButtonElement = document.getElementById('contentTextArea');

// Add event listener to plus button
plusButtonElement.addEventListener('click', () => {
  // Toggle display of content box
  contentBoxElement.style.display = contentBoxElement.style.display === 'none' ? 'block' : 'none';
  uparrow.style.display = uparrow.style.display === 'none' ? 'block' : 'none';
  downarrow.style.display = downarrow.style.display === 'block' ? 'none' : 'block';
});

// Add event listener to save button
saveButtonElement.addEventListener('click', () => {
  // Get content from textarea
  const content = contentTextAreaElement.value;
  
  // Do something with the content (e.g., save to server)
  console.log(`Content: ${content}`);
  
  // Hide content box
  contentBoxElement.style.display = 'none';
//   downarrow.style.display = downarrow.style.display === 'none' ? 'block' : 'none';
});

// Get the button element
const smallbtn = document.getElementById('s');
const mediumbtn = document.getElementById('m');
const largebtn = document.getElementById('l');

 // Add click event listener to the button
 smallbtn.addEventListener('click', function() {
    // Toggle the 'clicked' class to change the styling
    smallbtn.classList.toggle('clicked');
    mediumbtn.classList.remove('clicked');
    largebtn.classList.remove('clicked');
  });

 // Add click event listener to the button
 mediumbtn.addEventListener('click', function() {
    // Toggle the 'clicked' class to change the styling
    mediumbtn.classList.toggle('clicked');
    largebtn.classList.remove('clicked');
    smallbtn.classList.remove('clicked');
  });

 // Add click event listener to the button
 largebtn.addEventListener('click', function() {
    // Toggle the 'clicked' class to change the styling
    largebtn.classList.toggle('clicked');
    smallbtn.classList.remove('clicked');
    mediumbtn.classList.remove('clicked');
  });
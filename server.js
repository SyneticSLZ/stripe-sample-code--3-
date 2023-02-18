const stripe = require('stripe')("sk_test_51MNx4UKJeZAyw8f48GWSXpvAEKCzEU5ISvITCblYwxBpKMhUF9yZcnaosy2ukX9I8iDhMkvctmBMZWBqygrDC08r00r0xpZvXa");
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json())

let storeItems = new Map ([
  [ "price_1MXSxGKJeZAyw8f48U3ApmwS" , {
  
      price: "price_1MXSxGKJeZAyw8f48U3ApmwS",
      name: "FEMALE T-SHIRT",
      size: "S",
      product: "P-Female-Tshirt.html",
      cost: 1500,
      desc: "lorem ispum dsofis aoafjpa",
      image: "images/product-1.jpg",
      himage: "images/product-5.jpg"
  }],
  [ "price_1MXSrDKJeZAyw8f4XZmQKGF4" , {
      price: "price_1MXSrDKJeZAyw8f4XZmQKGF4",
      name: "MENS HOODIE",
      size: "S",
      product: "P-Mens-Hoodie.html",
      cost: 4500,
      desc: "lorem ispum dsofis aoafjpa",
      image: "images/product-2.jpg",
      himage: "images/product-5.jpg"
  }],
  [ "price_1MXSqUKJeZAyw8f46H1JNPHD", {
      price: "price_1MXSqUKJeZAyw8f46H1JNPHD",
      name: "FEMALE HOODIE",
      size: "S",
      product: "P-Female-Hoodie.html",
      cost: 4500,
      desc: "lorem ispum dsofis aoafjpa",
      image: "images/product-3.jpg",
      himage: "images/product-5.jpg"
  }],
  [ "price_1MXSfJKJeZAyw8f4LpeMgTl9", {
      price: "price_1MXSfJKJeZAyw8f4LpeMgTl9",
      name: "MENS JEANS",
      size: "S",
      product: "P-Mens-Jeans.html",
      cost: 3000,
      desc: "lorem ispum dsofis aoafjpa",
      image: "images/product-4.jpg",
      himage: "images/product-5.jpg"
  }],
  [ "price_1MXSeyKJeZAyw8f4qfbHTGhc", {
      price: "price_1MXSeyKJeZAyw8f4qfbHTGhc",
      name: "FEMALE JEANS",
      size: "S",
      product: "P-Female-Jeans.html",
      cost: 3000,
      desc: "lorem ispum dsofis aoafjpa",
      image: "images/product-5.jpg",
      himage: "images/product-5.jpg"
  }],
  [ "price_1MQGCcKJeZAyw8f4y2agJhuS", {
      price: "price_1MQGCcKJeZAyw8f4y2agJhuS",
      name: "MENS T-SHIRT",
      size: "S",
      product: "P-Mens-Tshirt.html",
      cost: 3000,
      desc: "lorem ispum dsofis aoafjpa",
      image: "images/product-6.jpg",
      himage: "images/product-5.jpg"
  }],
]);    

const YOUR_DOMAIN = "http://localhost:4242"


app.post('/create-checkout-session', async (request, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: request.body.items.map(item => {
      const storeItem = storeItems.get(item.price)
      return {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: storeItem.name
          },
        unit_amount: storeItem.cost
        },
        quantity: item.quantity
      }
    }),
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    })
    res.json({ url: session.url})
  }catch (e) {
    res.status(500).json({ error: e.message })
  }

})
app.listen(4242, () => console.log('Running on port 4242'));



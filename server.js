
// This is your test secret API key.
const stripe = require('stripe')('sk_test_51MNx4UKJeZAyw8f48GWSXpvAEKCzEU5ISvITCblYwxBpKMhUF9yZcnaosy2ukX9I8iDhMkvctmBMZWBqygrDC08r00r0xpZvXa');
const express = require('express');
const app = express();
//const path = require("path");
app.use(express.static('public'));
app.use(express.json())

const YOUR_DOMAIN = 'http://localhost:4242';

// app.post("/", (request, response) => {
//   //const { basket } = request.body
//   console.log(request.body)
//   if (!request.body) {
//     return response.status(400).send({ status: 'failed' })
//   }
//   response.status(400).send({ status: 'recieved' })
// }) 

app.post("/", function(request, response)  {
  let basket = request.body
})




app.post('/create-checkout-session', async (request, res) => {
  let basket = request.body
  console.log(basket)
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price:  "price_1MXSxGKJeZAyw8f48U3ApmwS",
        quantity: 1
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));
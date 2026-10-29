const express = require("express");
const Stripe = require("stripe");

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "usd",

            product_data: {
              name: "React Payment Demo",
            },

            unit_amount: 2500,
          },

          quantity: 1,
        },
      ],

      success_url: "http://localhost:5173/success",

      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({
      url: session.url,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;

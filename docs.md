# Stripe Payment Integration with React

## Overview

This project demonstrates how to integrate Stripe Checkout into a React application using an Express backend.

The frontend is responsible for displaying the user interface, while the backend securely communicates with Stripe using a secret API key.

---

# High Level Architecture

```text
                  User
                    │
                    ▼
          React Frontend (Vite)
                    │
        POST /create-checkout-session
                    │
                    ▼
          Express Backend API
                    │
      Uses Secret Stripe API Key
                    │
                    ▼
              Stripe API
                    │
      Creates Checkout Session
                    │
                    ▼
      Returns Checkout URL
                    │
                    ▼
      React redirects Browser
                    │
                    ▼
        Stripe Hosted Checkout
                    │
          User Pays Securely
                    │
         ┌──────────┴──────────┐
         ▼                     ▼
   Payment Success      Payment Cancelled
         │                     │
         ▼                     ▼
   /success page          /cancel page
```

---

# Payment Flow

## Step 1

The user clicks **Pay Now**.

The React application sends a POST request to the backend.

```
POST /api/create-checkout-session
```

---

## Step 2

The Express server receives the request.

Instead of React talking directly to Stripe, the backend handles the request because it contains the secret API key.

---

## Step 3

The backend creates a Stripe Checkout Session.

Example information sent to Stripe:

- Product Name
- Price
- Currency
- Quantity
- Success URL
- Cancel URL

Stripe responds with a Checkout Session URL.

---

## Step 4

The backend sends the Checkout URL back to React.

Example:

```json
{
  "url": "https://checkout.stripe.com/..."
}
```

---

## Step 5

React redirects the browser to the Stripe-hosted payment page.

```javascript
window.location.href = session.url;
```

---

## Step 6

The customer enters payment details.

For testing, Stripe provides a fake card:

```
4242 4242 4242 4242
```

No real money is charged.

---

## Step 7

Stripe processes the payment.

If successful:

```
http://localhost:5173/success
```

If cancelled:

```
http://localhost:5173/cancel
```

---

# Why Use a Backend?

The backend exists for security.

❌ Bad

```
React
   │
   └── Secret Stripe Key
```

Anyone could inspect your code and steal the key.

---

✅ Good

```
React
    │
    ▼
Express Backend
    │
Secret Key
    │
    ▼
Stripe
```

The secret key never leaves the server.

---

# Project Structure

```
client/
    App.jsx
    CheckoutButton.jsx
    Success.jsx
    Cancel.jsx

server/
    server.js
    routes/
        checkout.js
```

---

# Key Learning Points

- React handles the user interface.
- Express securely communicates with Stripe.
- Secret API keys should never be exposed to the frontend.
- Stripe Checkout simplifies secure online payments.
- Stripe redirects users back to your application after payment.
- In production, webhooks should be used to verify successful payments before delivering products.
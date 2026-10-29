require("dotenv").config();

const express = require("express");
const cors = require("cors");

const checkoutRoute = require("./routes/checkout");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", checkoutRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
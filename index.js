const express = require("express");
const app = express();

// Setup Environment Variables
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Parse json and cookies
app.use(express.json());
const cookieParser = require("cookie-parser");

// Import Routes
const ProductRoute = require("./src/api/routes/Product");
const UserRoute = require("./src/api/routes/User");
const dbAdminRoute = require("./src/api/routes/dbAdmin");

// Route Middlewares
app.use("/api/products", ProductRoute);
app.use("/api/users", UserRoute);

// Set Token Verification Middleware and Cookie Parser
const verify = require("./src/api/middlewares/verifyToken"); // Import middleware
app.use(cookieParser()); // Use cookies to allow access to signed in users
app.use("/try/products", verify, ProductRoute); // Deny access to route
app.use("/try/users/db", verify, dbAdminRoute); // Deny access to route

app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}...`));

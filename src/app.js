const express = require("express");

const app = express();

const employeeRoutes = require("./routes/employee.routes");

app.use(express.json());

app.use("/api/employees",employeeRoutes);


// const products = [
//     { id: 1, name: "Keyboard", price: 1200, category: "electronics" },
//     { id: 2, name: "Mouse", price: 600, category: "electronics" },
//     { id: 3, name: "Notebook", price: 100, category: "stationery" },
//     { id: 4, name: "Monitor", price: 12000, category: "electronics" }
// ];

// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "Node.js API is running"
//     });
// });

// app.get("/welcome", (req, res)=>{
//     res.status(200).json({
//         message:"Welcome to my first Node.js API"
//     });
// });
// app.get("/about", (req, res)=>{
//     res.status(200).json({
//         project:"Node user API",
//         language:"JavaScript",
//     });
// });
// app.get("/users/:id", (req, res)=>{
//     res.status(200).json({
//         userID:req.params.id,
//         message: "User ID received successfully"

//     });
// });

// app.get("/api/products", (req,res)=>{

//     const category = req.query.category;
//     const search = req.query.search;
 
//     const result = category ? products.filter((product)=> product.category === category || search && search.name.toLowerCase().includes(search.toLowerCase())) :products;

//     res.status(200).json({
//         success:true,
//         data:result,
//         message: "Products fetched successfully"
//     });
// });

module.exports = app;
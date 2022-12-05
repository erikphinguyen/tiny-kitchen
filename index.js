import express from "express";  // express is the variable from the "express" package; is bananable
// if our package.json does not use "type": "module", line 1 would be const express = require('express')
import mongoose from "mongoose";
import { orders } from "./routes/orders.js";
import { MONGO_URI } from "./config/keys.js";

const app = express();  // sets app to express fx; app is an object (console.log() to prove it)

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json()) // formats all responses in json

// app.get('/', (req, res) => res.send('Hello World')); // this line allows us to test page
app.get('/test', (req, res) => res.send('Hello World')); // can use this route to see if server works at all as well

// const multiplyByTwo = () => {
//     return 2 * 2
// }

// app.get('/test2', (req, res) => {
//     res.send(`${multiplyByTwo()}`)
// });

app.use("/api/orders", orders)

const port = process.env.PORT || 5001; // "opens the door to kitchen"; NOT a connection, just a way in
const callback = () => console.log(`Server is running on port ${port}`);
app.listen(port, callback); // 1st argument is a variable, 2nd is a fx
// can use
// curl -X GET 'http://localhost:${port}'
// to see if server is running without using browser
// curl -X POST -H 'Content-Type: application/json' 'http://localhost:5001/api/orders/' -d '{"items": "Pizza with Pineapple and Ham", "name": "Mark", "address":"Attiyas House"}'


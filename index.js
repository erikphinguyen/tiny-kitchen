import express from "express";  // express is the variable from the "express" package; is bananable
// if our package.json does not use "type": "module", line 1 would be const express = require('express')
const app = express();  // sets app to express fx; app is an object (console.log() to prove it)

const port = process.env.PORT || 5001;

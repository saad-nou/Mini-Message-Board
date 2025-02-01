
const express = require('express')
const app = express()

app.get('/',(req,res)=>res.send("index"))
app.get('/new', (req,res)=>res.send("new"))

const PORT = 3000;
app.listen(PORT,()=>console.log("listening on port ",PORT))

const express = require('express')
const path = require('node:path')

const app = express()
const indexRouter = require('./routes/index').indexRouter

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs")

const assetsPath = path.join(__dirname,"public")
app.use(express.static(assetsPath))

app.use(express.urlencoded())

app.use('/', indexRouter)

const PORT = 3000;
app.listen(PORT,()=>console.log("listening on port ",PORT))
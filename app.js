
const express = require('express')
const path = require('node:path')

const app = express()
const indexRouter = require('./routes/index').indexRouter
const newRouter = require('./routes/new').newRouter

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs")

app.use('/', indexRouter)
app.use('/new', newRouter)

const PORT = 3000;
app.listen(PORT,()=>console.log("listening on port ",PORT))
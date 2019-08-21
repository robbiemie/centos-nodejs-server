const express = require("express")
const chalk = require("chalk")
const app = express()
const port = 3004
const log = console.log

app.get("/", (req,res)=> {
  res.send("Hello Express")
})

app.get("/book", (req,res)=>{
  res.send("Hello Book")
})


app.listen(port, _ => {
  log(`App listening on the port: ${port}`)
})

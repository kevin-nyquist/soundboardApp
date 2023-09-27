// Requiring modules
const express = require('express')
const path = require('path')

// Creating express object
const app = express()

// Set up static resources (css files, images, javascript)
app.use(express.static('./public'))

// Handles error when page is not found
app.all('*',(req, res) => {
  res.status(404).send('<h1> Resource not found')
})
 
// Port Number
const PORT = process.env.PORT || 8080;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`))
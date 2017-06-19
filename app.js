const express = require('express')
const app = express()

// basic static requests... 
app.get('/', (req, res) => {
  res.sendFile('views/index.html')
})

app.get('/contact', (req, res) => {
  res.sendFile('views/contact.html')
})

app.get('/about', (req, res) => {
  res.sendFile('views/about.html')
})

// example of a dynamic request... 
app.get('/profile/:id', (req, res) => {
  res.send('You requested the profile with the id of: ' + req.params.id)
})
app.listen(3000)
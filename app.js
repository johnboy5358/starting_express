const express = require('express')
const app = express()

app.set('view engine', 'pug')

// basic static requests... 
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/about', (req, res) => {
  res.render('about')
})

// example of a dynamic request... 
app.get('/profile/:id', (req, res) => {
  res.send('You requested the profile with the id of: ' + req.params.id)
})
app.listen(3000)
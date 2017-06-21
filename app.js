const express = require('express')
const app = express()
const dbBoys = [
  {"id": '0', "name": "Hamish", "age": 270, "gender": "male", "comments": "Professor of Astro Physics, Vulcanology and Astronautics. Current engaged in 2022 Man to Mars Mission."},
  {"id": '1', "name": "Bramley", "age": 150, "gender": "male", "comments": "Michelin Star Chef, specializing in Bramley Apple deserts."},
  {"id": '2', "name": "Hannibal", "age": 2264, "gender": "male", "comments": "World renowned explorer, specialist in apline travel."},
  {"id": '3', "name": "Barnaby", "age": 189, "gender": "male", "comments": "World renowned Morris Dancing bear."},
  {"id": '4', "name": "Benjy", "age": 215, "gender": "male", "comments": "Expert in all yoga disciplines"}
]

// gets a specific profile from dbBoys by id.
const queryId = id => dbBoys.filter(boy => boy.id === id)

app.set('view engine', 'pug')

// basic static requests... 
app.get('/', (req, res) => {
  res.render('index')
}).get('/contact', (req, res) => {
  res.render('contact')
}).get('/about', (req, res) => {
  res.render('about')
}).get('/profiles', (req, res) => {
  res.render('profiles', {profiles: JSON.stringify(dbBoys)})
})

// example of a dynamic request... 
app.get('/profile/:id', (req, res) => {
  res.render('profiles', {profiles: JSON.stringify(queryId(req.params.id))})
})
// a request to an api
app.get('/api/team/:id', (req, res) => {
  res.send({person: queryId(req.params.id)[0]})
})

app.listen(3000)
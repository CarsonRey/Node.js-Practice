// express returns a function
const express = require('express')


// invoking that function gives us access to http verb methods by creating an express application object.
const app = express();

const courses = [
  {id: 1, name: 'holler'},
  {id: 2, name: 'hellohelllo'},
  {id: 3, name: 'whassup'}
]

app.get('/', (req, res) => {
  res.send('Wassup')
})

app.get('/api/courses', (req, res) => {
  res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))
  if (!course) res.status(404).send('404: Course with given id not found')
  res.send(course)
})

// While not much has changed visually from the if statements, we can seperate routes based on where they're going, i.e. all course routes might get their own module(file) because we can have an app listener in one place and export our modules wherever need be. This is what makes express scalable!

// Listening to port '3000' isn't very dynamic when it comes to the hosting environment.
// app.listen(3000, () => {console.log('Listening on port 3000...')})

// Instead we use an environment variable. It starts with the global object 'process' which has a property of 'env' for environment variables.

const port = process.env.PORT || 3000

// and change our above code to:

app.listen(port, () => {console.log(`Listening on port ${port}...`)})

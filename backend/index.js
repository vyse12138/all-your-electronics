const express = require('express')
const app = express()

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-type,Accept,X-Access-Token,X-Key'
  )
  if (req.method == 'OPTIONS') {
    res.status(200).end()
  } else {
    next()
  }
})

app.use(express.static('public'))

app.post('/user', function (req, res) {
  res.send('login')
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
})

app.listen(3000, () => {
  console.log('project listening at http://localhost:$3000')
})

const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
let accountDatabase = new sqlite3.Database('./databases/account.db')

// CORS
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
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
app.use(express.json())
// host front end pages
app.use(express.static('public'))

app.post('/api/login', (req, res) => {
  res.send(req.body)
})

app.listen(3000, () => {
  console.log('project listening at http://localhost:$3000')
})

accountDatabase.close()

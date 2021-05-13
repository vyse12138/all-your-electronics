const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
let accountDB = new sqlite3.Database('./databases/account.db')

// CORS
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-type,Accept,X-Access-Token,X-Key'
  )
  next()
})
app.use(express.json())
// host front end pages
app.use(express.static('public'))

app.post('/api/login', (req, res) => {
  accountDB.get(
    `SELECT * FROM CustomerAccount WHERE Username=? AND Password=?`,
    [req.body.username, req.body.password],
    (err, row) => {
      if (err) {
        throw err
      }

      if (row) {
        res.send(true)
      } else {
        res.send(false)
      }
    }
  )
})

app.post('/api/signup', (req, res) => {
  accountDB.run(
    `INSERT INTO CustomerAccount (Username, Password) VALUES (?, ?)`,
    [req.body.username, req.body.password]
  )

  res.status(200).end()
})

app.listen(3000, () => {
  console.log('project listening at http://localhost:$3000')
})

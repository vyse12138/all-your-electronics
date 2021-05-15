const express = require('express')
const app = express()
const loginModule = require('./src/login')
const sqlite3 = require('sqlite3').verbose()
let accountDB = new sqlite3.Database('./databases/account.db')
let recordDB = new sqlite3.Database('./databases/record.db')
let productDB = new sqlite3.Database('./databases/product.db')
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

app.post('/api/login', loginModule.handleLogin)

app.get('/api/catelog/:category', (req, res) => {
  productDB.all(
    'SELECT * FROM Product WHERE category=?',
    [req.params.category],
    (err, rows) => {
      let data = []
      rows.forEach((row) => {
        data.push(row)
      })
      res.json(data)
    }
  )
})

app.post('/api/signup', loginModule.handleSignUp)

app.post('/api/checkout', (req, res) => {
  recordDB.run(
    'INSERT INTO PurchaseRecord (Date, Username, Price, Products, Shipment) VALUES (?, ? , ?, ?, ?)',
    [
      req.body.date,
      req.body.username,
      req.body.price,
      req.body.item,
      req.body.shipment
    ]
  )
  res.json(req.body)
})

// customer check orders
app.post('/api/order', (req, res) => {
  recordDB.all(
    'SELECT * FROM PurchaseRecord WHERE Username=?',
    [req.body.username],
    (err, rows) => {
      let order = []
      rows.forEach((row) => {
        order.push(row)
      })
      res.json(order)
    }
  )
})

// staff check orders
app.get('/api/orders', (req, res) => {
  recordDB.all(
    'SELECT * FROM PurchaseRecord',
    [req.body.username],
    (err, rows) => {
      let orders = []
      rows.forEach((row) => {
        orders.push(row)
      })
      res.json(orders)
    }
  )
})

app.listen(3000, () => {
  console.log('project listening at http://localhost:$3000')
})

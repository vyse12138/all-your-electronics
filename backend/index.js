const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
let accountDB = new sqlite3.Database('./databases/account.db')
let recordDB = new sqlite3.Database('./databases/record.db')
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

app.get('/api/catelog/:category', (req, res) => {
  let data
  switch (req.params.category) {
    case 'Phone':
      data = [
        { name: 'iPhone 12', price: 1299 },
        { name: 'Vivo X50', price: 899 },
        { name: 'Oppo X3', price: 999 },
        { name: 'Samsung Galaxy X21', price: 1099 }
      ]
      break
    case 'Computer':
      data = [
        { name: 'MacBook Air', price: 1499 },
        { name: 'MacBook Pro', price: 2099 },
        { name: 'iMac', price: 4099 },
        { name: 'Mac mini', price: 1699 }
      ]
      break
    case 'TV':
      data = [
        { name: '8k Ultra HD TV', price: 3999 },
        { name: '4k Ultra HD TV', price: 2999 },
        { name: '2k HD TV', price: 1999 },
        { name: '1k Normal TV', price: 999 }
      ]
      break
    case 'Camera':
      data = [
        { name: '4k Camera', price: 1899 },
        { name: 'GoPro Camera', price: 1599 },
        { name: 'Action Camera', price: 899 },
        { name: 'Security Camera', price: 299 }
      ]
      break
    case 'Pad':
      data = [
        { name: 'iPad', price: 899 },
        { name: 'jPad', price: 799 },
        { name: 'kPad', price: 699 },
        { name: 'aPad', price: 599 }
      ]
      break
    case 'Headphone':
      data = [
        { name: 'AirPods', price: 249 },
        { name: 'AirPods Pro', price: 399 },
        { name: 'AirPods Max', price: 799 },
        { name: 'PowerBeats', price: 299 }
      ]
      break
  }
  res.json(data)
})

app.post('/api/signup', (req, res) => {
  accountDB.run(
    `INSERT INTO CustomerAccount (Username, Password) VALUES (?, ?)`,
    [req.body.username, req.body.password]
  )
  res.status(200).end()
})

app.post('/api/checkout', (req, res) => {
  recordDB.run(
    `INSERT INTO PurchaseRecord (Username, Price, Products) VALUES (?, ?, ?)`,
    [req.body.username, req.body.price, req.body.item]
  )
  res.json(req.body)
})

// customer check orders
app.post('/api/order', (req, res) => {
  recordDB.all(
    `SELECT * FROM PurchaseRecord WHERE Username=?`,
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
    `SELECT * FROM PurchaseRecord`,
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

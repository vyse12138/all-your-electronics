const express = require('express')
const app = express()
const loginModule = require('./src/login')
const productModule = require('./src/product')
const checkoutModule = require('./src/checkout')
const orderModule = require('./src/order')

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

// login and sign up api
app.post('/api/login', loginModule.handleLogin)
app.post('/api/signup', loginModule.handleSignUp)

// product api
app.get('/api/catelog/:category', productModule.handleProduct)

// checkout api
app.post('/api/checkout', checkoutModule.handleCheckout)

// orders api
app.post('/api/order', orderModule.handleUserOrder)
app.get('/api/orders', orderModule.handleAdminOrder)

app.post('/api/orders/edit', orderModule.handleEditOrder)

app.listen(3000, () => {
  console.log('project listening at http://localhost:$3000')
})

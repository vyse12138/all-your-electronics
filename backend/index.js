const express = require('express')
const loginModule = require('./src/login')
const feedbackModule = require('./src/feedback')
const productModule = require('./src/product')
const checkoutModule = require('./src/checkout')
const orderModule = require('./src/order')
const app = express()

// CORS handling middleware, used for frontend testing
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-type,Accept,X-Access-Token,X-Key'
  )
  next()
})

//enable json response
app.use(express.json())

// host front end pages
app.use(express.static('public'))

// login and sign up api
app.post('/api/login', loginModule.handleLogin)
app.post('/api/signup', loginModule.handleSignUp)
app.post('/api/login/admin', loginModule.handleAdminLogin)

// product api
app.get('/api/product/', productModule.handleProduct)
app.get('/api/product/:category', productModule.handleProductCategory)
app.post('/api/product/delete', productModule.handleDeleteProduct)
app.post('/api/product/new', productModule.handleNewProduct)

// checkout api
app.post('/api/checkout', checkoutModule.handleCheckout)

// orders api
app.post('/api/order', orderModule.handleUserOrder)
app.get('/api/orders', orderModule.handleAdminOrder)
app.post('/api/orders/edit', orderModule.handleEditOrder)

// feedback api
app.post('/api/feedback', feedbackModule.handlePostFeedback)
app.get('/api/feedbacks', feedbackModule.handleGetFeedback)

app.listen(3000, () => {
  console.log('project listening at http://localhost:3000')
})

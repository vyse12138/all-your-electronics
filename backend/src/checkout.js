const sqlite3 = require('sqlite3').verbose()

let recordDB = new sqlite3.Database('./databases/record.db')

exports.handleCheckout = (req, res) => {
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
}

const sqlite3 = require('sqlite3').verbose()

let recordDB = new sqlite3.Database('./databases/record.db')

exports.handleUserOrder = (req, res) => {
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
}

exports.handleAdminOrder = (req, res) => {
  recordDB.all('SELECT * FROM PurchaseRecord', [], (err, rows) => {
    let orders = []
    rows.forEach((row) => {
      orders.push(row)
    })
    res.json(orders)
  })
}

exports.handleEditOrder = (req, res) => {
  recordDB.run('UPDATE PurchaseRecord SET shipment=? WHERE id=?', [
    req.body.shipment,
    req.body.id
  ])
  res.status(200).end()
}

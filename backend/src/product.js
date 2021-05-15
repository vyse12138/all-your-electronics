const sqlite3 = require('sqlite3').verbose()

let productDB = new sqlite3.Database('./databases/product.db')

exports.handleProduct = (req, res) => {
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
}

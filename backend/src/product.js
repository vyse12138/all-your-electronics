const sqlite3 = require('sqlite3').verbose()
const productDB = new sqlite3.Database('./databases/product.db')

exports.handleProductCategory = (req, res) => {
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

exports.handleProduct = (req, res) => {
  productDB.all('SELECT * FROM Product', [], (err, rows) => {
    let data = []
    rows.forEach((row) => {
      data.push(row)
    })
    res.json(data)
  })
}

exports.handleDeleteProduct = (req, res) => {
  productDB.run('DELETE FROM Product WHERE id=?', [req.body.id])
  res.status(200).end()
}

exports.handleNewProduct = (req, res) => {
  productDB.run('INSERT INTO Product (name, price,category) VALUES (?, ?, ?)', [
    req.body.name,
    req.body.price,
    req.body.category
  ])
  res.status(200).end()
}

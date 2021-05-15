const sqlite3 = require('sqlite3').verbose()

let accountDB = new sqlite3.Database('./databases/account.db')

exports.handleLogin = (req, res) => {
  accountDB.get(
    'SELECT * FROM CustomerAccount WHERE Username=? AND Password=?',
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
}

exports.handleSignUp = (req, res) => {
  accountDB.run(
    'INSERT INTO CustomerAccount (Username, Password) VALUES (?, ?)',
    [req.body.username, req.body.password]
  )
  res.status(200).end()
}

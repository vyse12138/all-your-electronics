const sqlite3 = require('sqlite3').verbose()

let feedbackDB = new sqlite3.Database('./databases/feedback.db')

exports.handleGetFeedback = (req, res) => {
  feedbackDB.all('SELECT * FROM Feedback', (err, rows) => {
    if (err) {
      throw err
    }
    let feedbacks = []
    rows.forEach((row) => {
      feedbacks.push(row)
    })
    res.json(feedbacks)
  })
}

exports.handlePostFeedback = (req, res) => {
  feedbackDB.run('INSERT INTO Feedback (username, feedback) VALUES (?, ?)', [
    req.body.username,
    req.body.feedback
  ])
  res.status(200).end()
}

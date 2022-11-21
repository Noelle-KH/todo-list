const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Todo List</h1>')
})

app.listen(port, () => {
  console.log(`Listening on http://loccalhost:${port}`)
})
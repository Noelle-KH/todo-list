const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const Todo = require('./models/todo-model')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')

const app = express()
const port = 3000

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})


app.engine('hbs', exphbs.engine({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    checked: (isDone) => {
      if (isDone) return 'checked'
    }
  }
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)


app.listen(port, () => {
  console.log(`Listening on http://loccalhost:${port}`)
})
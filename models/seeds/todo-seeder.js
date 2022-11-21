const mongoose = require('mongoose')
const Todo = require('../todo-model')
const todoData = require('./todo-data.json')

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
  Todo.insertMany(todoData)
  console.log('done')
})
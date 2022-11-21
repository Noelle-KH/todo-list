const db = require('../../config/mongoose')
const Todo = require('../todo-model')
const todoData = require('./todo-data.json')

db.once('open', () => {
  Todo.insertMany(todoData)
  console.log('done')
})
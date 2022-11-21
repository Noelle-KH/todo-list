const express = require('express')
const Todo = require('../../models/todo-model')
const router = express.Router()

router.get('/', (req, res) => {
  Todo.find()
    .lean()
    .then(todos => res.render('index', { todos }))
    .catch(error => console.log(error))
})

module.exports = router


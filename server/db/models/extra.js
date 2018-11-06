const Sequelize = require('sequelize')
const db = require('../db')

const Extra = db.define('extra', {
  example: Sequelize.TEXT,
  comment: Sequelize.TEXT
})

module.exports = Extra

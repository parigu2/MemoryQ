const Sequelize = require('sequelize')
const db = require('../db')

const Card = db.define('card', {
  word: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  pronounciation: {
    type: Sequelize.STRING,
  },
  definition: {
    type: Sequelize.TEXT,
    validation: {
      notEmpty: true
    }
  },
  example: Sequelize.TEXT,
  comment: Sequelize.TEXT
})

module.exports = Card

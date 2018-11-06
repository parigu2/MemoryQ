const Sequelize = require('sequelize')
const db = require('../db')

const CardList = db.define('cardList', {
  name: {
    type: Sequelize.STRING,
    validation: {
      notEmpty: true
    }
  },
  isFavorite: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = CardList

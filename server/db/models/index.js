const User = require('./user')
const Card = require('./card')
const CardList = require('./cardList')

User.hasMany(CardList)
CardList.belongsTo(User)

CardList.hasMany(Card)
Card.belongsToMany(CardList, {through: 'listCard'})


module.exports = {
  User,
  Card,
  CardList
}

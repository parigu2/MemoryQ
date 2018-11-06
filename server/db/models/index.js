const User = require('./user')
const Card = require('./card')
const CardList = require('./cardList')
const Extra = require('./extra')

User.hasMany(CardList)
CardList.belongsTo(User)

CardList.hasMany(Card)
Card.belongsToMany(CardList, {through: 'listCard'})

Card.hasOne(Extra)
Extra.belongsTo(Card)


module.exports = {
  User,
  Card,
  CardList,
  Extra
}

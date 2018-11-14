const router = require('express').Router()
const {Card, CardList} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const words = await Card.findAll()
    res.json(words)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log('requese', req.body)
    const newWord = await Card.create(req.body)
    console.log('newWord', newWord)
    res.json(newWord)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const word = await Card.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(word)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/list', async (req, res, next) => {
  try {
    const cardlists = await CardList.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(cardlists)
  } catch (err) {
    next(err)
  }
})




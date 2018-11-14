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
    const newWord = await Card.create(req.body)
    res.json(newWord)
  } catch (err) {
    next(err)
  }
})

router.delete('/:wordId', async (req, res, next) => {
  try {
    const id = req.params.wordId

    await Card.destroy({
      where: {
        id
      }
    })
    const removedCard = await Card.findAll()
    res.json(removedCard)
  } catch(err) {
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




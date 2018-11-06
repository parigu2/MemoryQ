'use strict'

const db = require('../server/db')
const {User, Card, CardList} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const cards = await Promise.all([
    Card.create({
      word: 'accomplishment',
      pronounciation: `[əˈkɑːm-]`,
      definition: '[명사] 업적, 공적',
      example: `- It was one of the President’s greatest accomplishments.

      그것은 대통령의 가장 큰 공적 중 하나였다.`,
      comment: 'accomplish = 동사',
    }),
    Card.create({
      word: 'efficiency',
      pronounciation: `[ɪˈfɪʃnsi]`,
      definition: '[명사] 효율(성), 능률',
      example: `- improvements in efficiency at the factory

      공장 내 능률 개선`,
      comment: 'efficient = 형용사',
    }),
  ])

  const cardLists = await Promise.all([
    CardList.create({
      name: 'English Word',
      isFavorite: true
    }),
    CardList.create({
      name: 'empty',
    })
  ])

  await Promise.all(
    cards.map(async card => {
      await card.addCardLists(1)
    })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${cards.length} cards`)
  console.log(`seeded ${cardLists.length} card lists`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

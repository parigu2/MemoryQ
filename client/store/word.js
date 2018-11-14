import axios from 'axios'

const GET_WORDS = 'GET_WORDS'
const ADD_WORD = 'ADD_WORD'

const initialState = {
  words: []
}

const getWords = words => ({
  type: GET_WORDS,
  words
})

const addWord = word => ({
  type: ADD_WORD,
  word
})

export const getWordsThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/words')
    dispatch(getWords(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const addWordThunk = newWord => async dispatch => {
  try {
    const res = await axios.post('/api/words', newWord)
    dispatch(addWord(res.data))
  } catch(err) {
    console.log(err)
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WORDS:
      return {...state, words: action.words}
    case ADD_WORD:
      return {...state, words: [...state.words, action.word].sort((a,b) => a.id-b.id)}
    default:
      return state
  }
}

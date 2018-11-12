import axios from 'axios'

const GET_WORDS = 'GET_WORDS'

const initialState = {
  words: []
}

const getWords = words => ({
  type: GET_WORDS,
  words
})

export const getWordsThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/words')
    dispatch(getWords(res.data))
  } catch (err) {
    console.log(err)
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WORDS:
      return {...state, words: action.words}
    default:
      return state
  }
}

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getWordsThunk} from '../store/word'

class List extends Component {
 constructor() {
  super()
  this.state = {

  }
 }

 componentDidMount() {
  this.props.getWords()
}


 render() {
   const {words} = this.props.word
   return (
    <div>hi
      {
        words.length ?
        words.map(word => {
          return (
          <div key={word.id}>
            <p>{word.word}</p>
          </div>
          )
        })
        : <p>Please insert card</p>
      }
    </div>
   )
 }
}

const mapStateToProps = state => {
  return {
    word: state.word
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWords: () => dispatch(getWordsThunk()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

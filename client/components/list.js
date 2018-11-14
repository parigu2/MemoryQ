import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getWordsThunk} from '../store/word'
import { Card, Icon, Button } from 'semantic-ui-react'

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
    <div>
      <div>
        <Button basic color='teal' content='ADD' />
      </div>
      {
        words.length ?
        words.map(word => {
          return (
          <Card key={word.id}>
            <Card.Content>
              <Card.Header>{word.word}<Icon name='book'></Icon></Card.Header>
              <Card.Meta>{word.pronounciation}</Card.Meta>
              <Card.Description>{word.definition}</Card.Description>
              <Button.Group>
                <Button positive>EDIT</Button>
                <Button.Or text='or' />
                <Button negative>REMOVE</Button>
              </Button.Group>
            </Card.Content>
          </Card>
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
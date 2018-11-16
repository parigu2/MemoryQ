import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FormCard} from './formCard'
import {getWordsThunk, addWordThunk, removeWordThunk} from '../store/word'
import { Card, Icon, Button, Modal, Popup } from 'semantic-ui-react'

class List extends Component {
  constructor() {
    super()
    this.state = {
      word: '',
      pronounciation: '',
      definition: '',
      modalOpen: false
    }
    this.textChange = this.textChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.removeCard = this.removeCard.bind(this)
  }

  componentDidMount() {
    this.props.getWords()
  }

  handleOpen() {
    this.setState({modalOpen: true})
  }

  handleClose() {
    this.setState({modalOpen: false})
  }

  async removeCard(event) {
    const wordId = event.target.value
    await this.props.delete(wordId)
  }

  textChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    await this.props.post(this.state)
    this.setState({modalOpen: false})
  }

  render() {
   const {words} = this.props.word

   return (
    <div>
      <div>
        <Modal
        trigger={<Button basic color='teal'
        onClick={this.handleOpen}>ADD</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}>
          <Modal.Header>Add Card</Modal.Header>
          <Modal.Content image>
            {/* <Image wrapped size='medium' src={this.state.imageUrl} /> */}
              {/* <h2 className="title">Edit Product</h2> */}
            <Modal.Description>
              {/* <FormProduct textChange={this.textChange} increment={this.increment} decrement={this.decrement} handleSubmit={this.handleSubmit} inputCategory={this.inputCategory} value={this.state} category={this.props.categories}/> */}
              <FormCard value={this.state} handleSubmit={this.handleSubmit} textChange={this.textChange}close={this.handleClose}/>
            </Modal.Description>
          </Modal.Content>
          </Modal>
      </div>
      {
        words.length ?
        words.map(word => {
          return (
          <Card color='teal' key={word.id}>
            <Card.Content>
              <Popup trigger={<Card.Header>{word.word}<Icon name='book'></Icon></Card.Header>}
              content={word.definition}/>
              <Card.Meta>{word.pronounciation}</Card.Meta>
              {/* <Card.Description>{word.definition}</Card.Description> */}
              <Button.Group>
                <Button positive
                >EDIT</Button>
                <Button.Or text='or' />
                <Button negative
                onClick={this.removeCard}
                value={word.id}>REMOVE</Button>
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
    post: word => dispatch(addWordThunk(word)),
    delete: wordId => dispatch(removeWordThunk(wordId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

import React from 'react'
import {Form, Label} from 'semantic-ui-react'

export const FormCard = props => {
  const { word, pronounciation, definition } = props.value

  return (
  <div>
    <Form onSubmit={event => props.handleSubmit(event)}>
    <Form.Field>
      <label htmlFor="word">Memory Word</label>
      <input type="text" name="word" value={word} placeholder='Memory Word' onChange={event => props.textChange(event)}/>
      {
        word ?
        <h1/>:
        <Label pointing>Please enter a word</Label>
      }
      {/* <Label pointing>Please enter a word</Label> */}
    </Form.Field>
    <Form.Field>
      <label htmlFor="pronounciation">pronounciation</label>
      <input type="text" name="pronounciation" value={pronounciation} placeholder='Pronounciation'onChange={event => props.textChange(event)}/>
      {
        pronounciation ?
        <h1/> :
        <Label pointing>Please enter a value</Label>
      }
    </Form.Field>
    <Form.Field>
      <label htmlFor="definition">Definition</label>
      <textarea type="text" name="definition" value={definition} placeholder='Definition' onChange={event => props.textChange(event)}/>
      {
        definition ?
        <h1/> :
        <Label pointing>Please enter a definition</Label>
      }
    </Form.Field>
    {/* <Form.Field>
      <Label pointing="below">Please choose at least one of categories</Label>
      <label name="categoryId">Categories</label>
    </Form.Field> */}
    <Form.Button disabled={!word || !definition} type="submit" color='blue'>Submit</Form.Button>
    </Form>
  </div>
  )
}

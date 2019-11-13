import {Form, Image, TextArea, Button, Message, Header, Icon, Input} from 'semantic-ui-react'

function CreateProduct() {
  return (
    <>
  <Header as ="h2" block>
    <Icon name= "add" color="orange" />
    Create New Product
  </Header>
  <Form>
    <Form.Group widths="equal">
      <Form.Field
      control ={Input}
      name="name"
      label="Name"
      placeholder="Name"
      />
       
      <Form.Field
      control ={Input}
      name="Price"
      label="Price"
      placeholder="Price"
      min="0"
      step="1"
      type="number"
      />
      
      <Form.Field
      control ={Input}
      name="media"
      label="Media"
      placeholder="Name"
      accept="image/*"
      content= "Select Image"
      />


    </Form.Group>
   
      <Form.Field
      control ={TextArea}
      name="description"
      label="Description"
      placeholder="Description"
      />
       
      <Form.Field
      control ={Button}
      color="blue"
      icon="pencil alternate"
      content="Submit"
      type="submit"
      />

  </Form>

    </>
  )
}

export default CreateProduct;

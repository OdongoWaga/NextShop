import React from 'react'
import {Form, Image, TextArea, Button, Message, Header, Icon, Input} from 'semantic-ui-react'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'

const INITIAL_PRODUCT = {
  name:'',
  price:'',
  media:'',
  description:''

}

function CreateProduct() {
const [product, setProduct] = React.useState(INITIAL_PRODUCT)

const [mediaPreview, setMediaPreview] = React.useState('')
const [success, setSuccess] = React.useState(false)

function handleChange(e) {
  const {name, value, files} =e.target
 if(name ==="media") {
   setProduct(prevState => ({...prevState, media: files[0]}))
   setMediaPreview(window.URL.createObjectURL(files[0]))
 } else {
  setProduct((prevState)=> ({...prevState, [name]:value}))
 }
 
}

async function handleImageUpload() {
  const data = new FormData()
  data.append('file', product.media)
  data.append('upload_preset', 'reactcycle')
  data.append('cloud_name', 'dkwqktq6r')
  const response = await axios.post(process.env.CLOUDINARY_URL, data)
  const mediaUrl = response.data.url
  return mediaUrl

}


async function handleSubmit(e) {
  e.preventDefault();
  const mediaUrl = await handleImageUpload()
  console.log({mediaUrl})
  // const url = `${baseUrl}/api/product`
  // const {name, price, description} = product
  // const payload = {name, price, description, mediaUrl}
  // await axios.post(url, payload)
  setProduct(INITIAL_PRODUCT)
  setSuccess(true)
}

  return (
    <>
  <Header as ="h2" block>
    <Icon name= "add" color="orange" />
    Create New Product
  </Header>
  <Form success={success} onSubmit={handleSubmit}>
    <Message 
    success
    icon="check"
    header="Success!"
    content="Your product has been posted"
    />

    <Form.Group widths="equal">
      <Form.Field
      control ={Input}
      name="name"
      label="Name"
      value={product.name}
      placeholder="Name"
      onChange={handleChange}
      />
       
      <Form.Field
      control ={Input}
      name="Price"
      label="Price"
      placeholder="Price"
      value={product.price}
      min="0"
      step="1"
      type="number"
      onChange={handleChange}
      />
      
      <Form.Field
      control ={Input}
      name="media"
      type="file"
      label="Media"
      accept="image/*"
      content= "Select Image"
      onChange={handleChange}
      />


    </Form.Group>
    <Image src={mediaPreview} rounded centered size="small" />
   
      <Form.Field
      control ={TextArea}
      name="description"
      label="Description"
      placeholder="Description"
      value={product.description}
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

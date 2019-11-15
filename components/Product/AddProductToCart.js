import {Input, Icon} from 'semantic-ui-react'
import React from 'react'

function AddProductToCart() {
  const [quantity, setQuantity] = React.useState(1)


  return <Input
    type="number"
    min="1"
    placeholder="Quantity"
    value = {quantity}
    onChange= {e => setQuantity(Number(e.target.value))}
    action= {
      {
        color:'orange',
        content: 'Add to cart',
        icon:"plus cart"
      }
    }

    />;
}

export default AddProductToCart;

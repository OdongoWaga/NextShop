import {Input, Icon} from 'semantic-ui-react'

function AddProductToCart() {
  return <Input
    type="number"
    min="1"
    placeholder="Quantity"
    value = {1}
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

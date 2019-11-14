import {Divider, Segment, Button} from 'semantic-ui-react'


function CartSummary() {
  return <>
  <Divider/>
  <Segment clearing size = "large">
    <strong> Total</strong> Sh0
    <Button
    icon="cart"
    color="teal"
    floated="right"
    content="Checkout"
    />

   

  </Segment>
  </>;
}

export default CartSummary;

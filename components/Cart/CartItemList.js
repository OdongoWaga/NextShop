import {Header, Segment, Button, Icon} from 'semantic-ui-react'

function CartItemList() {
  const user = false

  return(
    <Segment secondary color="teal" inverted textAlign="center" placeholder>
      <Header icon>
        <Icon name ="shopping basket" />
        No products in your cart. Add some
      </Header>
      <div>
    {user ? (
      <Button color="orange">
        View Product
      </Button>
    ): (
      <Button color="blue">
Login to add Products
      </Button>
    )}

      </div>

    </Segment>
  )
}



export default CartItemList;

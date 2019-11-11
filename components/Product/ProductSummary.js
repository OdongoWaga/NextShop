import {Item, Label} from 'semantic-ui-react'

function ProductSummary({name, mediaUrl, _id, price, sku}) {
  return(
    <Item.Group>
      <Item>
      <Item.Image size ="medium" src={mediaUrl} />
      <Item.Content>
<Item.Header>{name}</Item.Header>
<Item.Description>
<p>${price}</p>
  <Label>SKU: {sku}</Label>
</Item.Description>
      </Item.Content>

      </Item>

    </Item.Group>
  )
}



export default ProductSummary;

import {Card} from 'semantic-ui-react';

function ProductList({products}) {
function mapProductsToItems(products) {
  return products.map(product => ({
    header: product.name,
    image: product.mediaUrl,
    color: "teal",
    meta: `Sh${product.price}`,
    fluid: true,
    childKey: product._id,
    href:`/product?_id=${product._id}`
  }));
}

  return <Card.Group stackable  itemsPerRow="3" centered items= {mapProductsToItems(products)} />;
}

export default ProductList;

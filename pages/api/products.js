import products from '../../static/products'

export default (req, res) => {
    res.status(200).json(products)
}
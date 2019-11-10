import products from '../../static/products'
import connectDb from '../../utils/connectDb'

connectDb()

export default (req, res) => {
    res.status(200).json(products)
}
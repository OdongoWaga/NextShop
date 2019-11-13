import React from 'react'
import axios from 'axios'
import ProductList from '../components/Index/ProductList'
import baseUrl from '../utils/baseUrl'

function Home({products}) {



  return <ProductList products={products} />;
}

Home.getInitialProps =  async () => {
//fetch data from server
const url =`${baseUrl}/api/products`
const response = await axios.get(url)
return {products: response.data}

//return response data as an object
return {hello: 'world'}

//note: this object will be merged with existing props

}

export default Home;

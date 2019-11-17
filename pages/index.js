import React from 'react'
import axios from 'axios'
import ProductList from '../components/Index/ProductList'
import ProductPagination from '../components/Index/ProductPagination'
import baseUrl from '../utils/baseUrl'

function Home({products, totalPages}) {
  return (<> <ProductList products={products} />
    <ProductPagination totalPages={totalPages}/> </>)
}

Home.getInitialProps =  async ctx => {
  const page = ctx.query.page ? ctx.query.page : "1"
  const size  = 6

//fetch data from server
const url =`${baseUrl}/api/products`
const payload = {params: {page, size}}

const response = await axios.get(url, payload)
return  response.data

//return response data as an object


//note: this object will be merged with existing props

}

export default Home;

import App from "next/app";
import Layout from "../components/_App/Layout";
import {parseCookies, destroyCookie} from 'nookies'
import { redirectUser } from "../utils/auth";
import axios from "axios";
import baseUrl from '../utils/baseUrl'


class MyApp extends App {
static  async getInitialProps({Component, ctx}) {

  const {token} = parseCookies(ctx)

  let pageProps = {}

  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  if(!token) {
    const isProtectedRoute = ctx.pathname === '/account' || ctx.pathname === '/create'
    if (isProtectedRoute) {
      redirectUser(ctx, '/login')
    }
  } else {
    try{
      const payload={headers: {Authorization: token}}
      const url = `${baseUrl}/api/account`
      const response = await axios.get(url, payload)
      const user = response.data
      pageProps.user = user

    } catch(error) {
      console.error("Error getting current User", error)

      // Throw out invalid token
      destroyCookie(ctx, "token")

      //redirect to login
      redirectUser(ctx, "/login")


    }
  }

  return {pageProps}

}


  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps}/>
      </Layout>
    );
  }
}

export default MyApp;
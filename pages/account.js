import AccountHeader from '../components/Account/AccountHeader'
import AccountOrders from '../components/Account/AccountOrders'

function Account({user}) {
  return <>
  <AccountHeader {...user}/>
  <AccountOrders />
  
  </>;
}

export default Account;

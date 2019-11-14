import {Button, Form, Icon, Message, Segment} from 'semantic-ui-react'
import Link from 'next/link'
import React from 'react'
import catchErrors from '../utils/catchErrors'


const INITIAL_USER ={
  
  email: "",
  password: ""
}

function Signup() {
const [user, setUser]= React.useState(INITIAL_USER)
const [disabled, setDisabled] = React.useState(true)
const [loading, setLoading] = React.useState(false)
const [error, setError] = React.useState('')


React.useEffect(()=> {
  const isUser = Object.values(user).every(e=> Boolean(e))
  isUser ? setDisabled(false): setDisabled(true)
}, [user])

function handleChange (e) {
const {name, value} = e.target
setUser(prevState => ({...prevState, [name]: value}))
}

async function handleSubmit(e) {
  e.preventDefault()
try {
  setLoading(true)
  setError('')
  console.log(user)
//Make a request to signup user
} catch(error) {
  catchErrors(error, setError)

} finally {
  setLoading(false)

}
}

  return ( <>
  <Message
  attached
  icon="privacy"
  header= "Welcome Back!"
  content ="Login with Email and Password"
  color="blue"
  />
  <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
    <Message
    error
    header="Oops"
    content={error}
    />
  <Segment>
   
    <Form.Input
    fluid
    icon="envelope"
    iconPosition ="left"
    label="Email"
    placeholder="Email"
    name="email"
    type="email"
    value={user.email}
    onChange={handleChange}
    />
     <Form.Input
    fluid
    icon="lock"
    iconPosition ="left"
    label="Password"
    placeholder="Password"
    name="password"
    type="password"
    onChange={handleChange}
    value={user.password}
    />
    <Button
    icon ="signup"
    disabled= {disabled || loading}
    type="submit"
    color="orange"
    content= "Sign Up"
    />


  </Segment>

  </Form>
<Message attached="bottom" warning>
<Icon name="help"/>
New User?{" "}

<Link href="/signup">
  <a> Signup here </a>
</Link> {" "} instead
</Message>

  </>
  )
}

export default Signup;

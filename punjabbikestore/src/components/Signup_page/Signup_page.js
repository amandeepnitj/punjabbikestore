
import React, {useRef} from 'react';
import {Form, Button, Card, Container} from 'react-bootstrap';
//import {useAuth,AuthProvider} from '../../contexts/AuthContext.js';
/**
* @author
* @function Signup_page
**/

const Signup_page = () => {
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmRef=useRef();  
  //const {signup} =useAuth();

  function handleSubmit(e)
  {
    //e.preventDefault();
    // signup(emailRef.current.value,passwordRef.current.value)
  }
  return(
    <>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"80vh"}}>
    <div className="w-100" style={{maxWidth: "400px"}}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} reqiured/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} reqiured/>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>password Configuration</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} reqiured/>
            </Form.Group>
            <Button className="w-100" type="submit">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have account? <a href="/login"> Log In</a>
      </div>
      </div>
      </Container>
    </>
     
    
   )

 }

export default Signup_page
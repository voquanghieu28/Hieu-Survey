/***********************************************************************************
* Author:         QUANG HIEU VO
* Date:           April 10, 2021     
* Assignment:     Culmination project, COIS 3420H Winter 2021
* Parameters:     N/A
* References:     N/A
* Revisions:      N/A
************************************************************************************/
import {
  Card, CardBody,
  CardTitle, 
  Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MyNavbar from './components/MyNavbar';
  
/** LOGIN PAGE */
function Login() {

    /** Storing page variables*/
    const [email, setEmail]               = useState("");
    const [password, setPassword]         = useState("");
    const [message, setMessage]           = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    /** Handle onsubmit event to login */
    const handleSubmit = (evt) => {
      evt.preventDefault();

      // Set messages to empty
      setMessage("")        
      setErrorMessage("")
      fetch('https://survey-hieu.herokuapp.com/login', {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }).then(response => response.json()) 
      .then(json => {
        if(json.status=="success")          // If success then set success messages
          setMessage("Correct combination")
        else if (json.status=="error") 
          setErrorMessage("Incorrect")      // If there is error then set error message
      })
      .catch(err => console.log(err));

    }

  /** Rendering page */
  return (
    <div className="App" style={{height: '100vh'}}>
      <MyNavbar/>
      <div className=" h-100 d-flex justify-content-center align-items-center" style={{backgroundColor : '#66CDAA'}}>   
        <Card >
            <CardBody>
            <CardTitle tag="h5">Login to your account</CardTitle>
            <Form onSubmit={handleSubmit}>
              {/** Email input field */}
              <FormGroup row>
                <Label for="exampleEmail" sm={4}>Email</Label>
                <Col sm={8}>
                  <Input onChange={e => setEmail(e.target.value)} required type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                </Col>
              </FormGroup>
              {/** Password input field */}
              <FormGroup row>
                <Label for="examplePassword" sm={4}>Password</Label>
                <Col sm={8}>
                  <Input onChange={e => setPassword(e.target.value)} required type="password" name="password" id="examplePassword" placeholder="Enter your password" />
                </Col>
              </FormGroup>
              <h4 style={{color :'green'}}>{message}</h4>
              <h4 style={{color :'red'}}>{errorMessage}</h4>
              {/** Login button */}
              <FormGroup  row>
                <Label for="" sm={4}></Label>
                <Col sm={8}>
                  <Button type="submit">Log in</Button>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Login;

/** END OF FILE */
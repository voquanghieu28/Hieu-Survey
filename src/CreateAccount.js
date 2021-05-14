/***********************************************************************************
* Author:         QUANG HIEU VO
* Date:           April 10, 2021     
* Assignment:     Culmination project, COIS 3420H Winter 2021
* Parameters:     N/A
* References:     N/A
* Revisions:      N/A
************************************************************************************/
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MyNavbar from './components/MyNavbar';

import {
  Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';

/** CREATE ACCOUNT PAGE */
function CreateAccount() {
    
    /** Store fields in the form */
    const [name, setName]                 = useState("");
    const [phone, setPhone]               = useState("");
    const [email, setEmail]               = useState("");
    const [password, setPassword]         = useState("");
    const [message, setMessage]           = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    /** Handle form submission event */
    const handleSubmit = (evt) => {
      evt.preventDefault();

      // Set messages to empty
      setMessage("")
      setErrorMessage("")

      // Make post request to api, include form data
      fetch('https://survey-hieu.herokuapp.com/create-account', {
        method: "POST",
        body: JSON.stringify({
          name : name,
          phone: phone,
          email: email,
          password: password
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }).then(response => response.json()) 
      .then(json => {
        if(json.status=="success")  
          setMessage("User created successfully!")      // Set message if success
        else if (json.status=="duplicate") 
          setErrorMessage("This email already exist!")  // Set message if there is duplicated
      })
      .catch(err => console.log(err));
    }
  
  
  
    /** Rendering page */
    return (

      <div className="App" style={{height: '100vh'}}>
        <MyNavbar/>
        <div className=" h-100 d-flex justify-content-center align-items-center" style={{backgroundColor : '#FFC0CB'}}>   
          <Card >
              <CardBody>
                {/** Form to create account */}
              <CardTitle tag="h5">Create an account with survey rabbit</CardTitle>
              <Form onSubmit={handleSubmit}>
                {/** Input name fields */}
                <FormGroup row>
                  <Label for="name" sm={4}>Name</Label>
                  <Col sm={8}>
                    <Input onChange={e => setName(e.target.value)} required type="text" name="name" id="name" placeholder="Enter your name" />
                  </Col>
                </FormGroup>
                {/** Input phone fields */}
                <FormGroup row>
                  <Label for="phone" sm={4}>Phone</Label>
                  <Col sm={8}>
                    <Input onChange={e => setPhone(e.target.value)} required type="text" name="phone" id="phone" placeholder="Enter your phone number" />
                  </Col>
                </FormGroup>
                {/** Input email fields */}
                <FormGroup row>
                  <Label for="exampleEmail" sm={4}>Email</Label>
                  <Col sm={8}>
                    <Input onChange={e => setEmail(e.target.value)} required type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                  </Col>
                </FormGroup>
                {/** Input password fields */}
                <FormGroup row>
                  <Label for="examplePassword" sm={4}>Password</Label>
                  <Col sm={8}>
                    <Input onChange={e => setPassword(e.target.value)} required type="password" name="password" id="examplePassword" placeholder="Enter your password" />
                  </Col>
                </FormGroup>
                <h4 style={{color :'green'}}>{message}</h4>
                <h4 style={{color :'red'}}>{errorMessage}</h4>
                {/** Submit button */}
                <FormGroup  row>
                  <Label for="" sm={4}></Label>
                  <Col sm={8}>
                    <Button type="submit">Create account</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
  
export default CreateAccount;

/** END OF FILE */
  
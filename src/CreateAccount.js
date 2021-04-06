
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import MyNavbar from './components/MyNavbar';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
  Button, Form, FormGroup, Label, Input, FormText, Col
} from 'reactstrap';
  
  //import { Button } from 'bootstrap';
  
  function CreateAccount() {
  
      
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);

      const [name, setName] = useState("");
      const [phone, setPhone] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      
      const [message, setMessage] = useState("");
      const [errorMessage, setErrorMessage] = useState("");
  
   /*
      useEffect(() => {
          fetch("http://localhost:8080/list")
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setSurvey(result);
                //setState(result);
                console.log(survey)
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )    
        }, [])*/

    const handleSubmit = (evt) => {
      evt.preventDefault();
      setMessage("")
      setErrorMessage("")
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
          setMessage("User created successfully!")
        else if (json.status=="duplicate") 
          setErrorMessage("This email already exist!")
      })
      .catch(err => console.log(err));

    }
  
  
  
  
    return (

      <div className="App" style={{height: '90vh'}}>
        <MyNavbar/>
        <div className=" h-100 d-flex justify-content-center align-items-center">   
          <Card >
              <CardBody>
              <CardTitle tag="h5">Create an account with survey rabbit</CardTitle>
              <Form onSubmit={handleSubmit}>
                <FormGroup row>
                  <Label for="name" sm={4}>Name</Label>
                  <Col sm={8}>
                    <Input onChange={e => setName(e.target.value)} required type="text" name="name" id="name" placeholder="Enter your name" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="phone" sm={4}>Phone</Label>
                  <Col sm={8}>
                    <Input onChange={e => setPhone(e.target.value)} required type="text" name="phone" id="phone" placeholder="Enter your phone number" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleEmail" sm={4}>Email</Label>
                  <Col sm={8}>
                    <Input onChange={e => setEmail(e.target.value)} required type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={4}>Password</Label>
                  <Col sm={8}>
                    <Input onChange={e => setPassword(e.target.value)} required type="password" name="password" id="examplePassword" placeholder="Enter your password" />
                  </Col>
                </FormGroup>
                <h4 style={{color :'green'}}>{message}</h4>
                <h4 style={{color :'red'}}>{errorMessage}</h4>
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
  
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container, Row, Col,
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,
    Input, Form, FormGroup, Label
  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import React, { useState } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import 'font-awesome/css/font-awesome.min.css';
  
  import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
  
  
  function TextAnswer(props) {

      
    return (
      <div>
          <Card>
          <CardHeader><h5>{props.number}. {props.name} </h5>
          </CardHeader>
          <CardBody>
            
            <CardText>

            <FormGroup row>
                <Label for="exampleText" sm={1}>Text Area</Label>
                <Col sm={11}>
                <Input required rows="5" type="textarea" name={`questions[${props.name}]`} id="exampleText" />
                </Col>
            </FormGroup>
              

                


  
            </CardText>
          </CardBody>
        </Card>
        <br></br>
      </div>
    );
  }
  
  export default TextAnswer;
  
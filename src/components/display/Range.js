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
  
  
  function Range(props) {

      
    return (
      <div>
          <Card>
          <CardHeader><h5>{props.number}. {props.name} </h5>
          </CardHeader>
          <CardBody>
            
            <CardText>

            <FormGroup row>
                
             
                <Input style={{marginLeft:'20px',marginRight:'20px'}}type="range" name={`questions[${props.name}]`} id="exampleRange" />
          
            </FormGroup>
              

                


  
            </CardText>
          </CardBody>
        </Card>
        <br></br>
      </div>
    );
  }
  
  export default Range;
  
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
  Container,
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import ReactCSSTransitionGroup from "react-transition-group"; // ES6

function Quiz(props) {
  return (
    <div>
      <Card
        className="shadow"
        style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
      >
        <CardHeader>
          <h5>
            {props.number}. {props.name}{" "}
          </h5>
        </CardHeader>
        <CardBody>
          <CardText>
            <FormGroup tag="fieldset">
              {props.options.map((value, index) => {
                return (
                  <FormGroup check>
                    <Input
                      required
                      id="radio1-option1"
                      type="radio"
                      value={value}
                      name={`questions[${props.name}]`}
                      style={{ width: "1em", height: "1em" }}
                    />
                    <Label check for="radio1-option1">
                      {value}
                    </Label>
                  </FormGroup>
                );
              })}
            </FormGroup>
          </CardText>
        </CardBody>
      </Card>
      <br></br>
    </div>
  );
}

export default Quiz;

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
function TrueFalse(props) {
  return (
    <div>
      <input
        type="hidden"
        name={`questions[${props.number - 1}][type]`}
        value="tf"
      />
      <Card className="shadow">
        <CardHeader>
          {props.number}. True/false
          <a
            onClick={() => {
              props.removeQuestion(props.number - 1);
            }}
            href="#"
          >
            <FontAwesomeIcon
              icon={faTrashAlt}
              color="red"
              className="float-right"
              size="lg"
            />
          </a>
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            <FormGroup row>
              <Label for="name" sm={2}>
                Question name:
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="text"
                  name={`questions[${props.number - 1}][name]`}
                  id="name"
                  placeholder="with a placeholder"
                />
              </Col>
            </FormGroup>
          </CardTitle>
        </CardBody>
      </Card>
      <br></br>
    </div>
  );
}

export default TrueFalse;

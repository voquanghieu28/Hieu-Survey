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
import React, { useState, Textarea } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Editor } from "@tinymce/tinymce-react";
function TextAnswer(props) {
  const [question, setQuestion] = useState({
    name: "",
    type: "text",
  });

  return (
    <div>
      <input
        type="hidden"
        name={`questions[${props.number - 1}][type]`}
        value="text"
      />
      <Card className="shadow">
        <CardHeader>
          {props.number}. Text answer
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
                  type="text"
                  required
                  name={`questions[${props.number - 1}][name]`}
                  id="name"
                  placeholder="with a placeholder"
                />
              </Col>
            </FormGroup>
          </CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
      <br></br>
    </div>
  );
}

export default TextAnswer;

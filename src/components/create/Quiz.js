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

function Quiz(props) {
  //const [optionList, setOptionList] = useState(["", ""]);

  const [question, setQuestion] = useState({
    list: ["", ""],
    name: "",
    type: "quiz",
  });

  const addQuestion = () => {
    const newQuestion = Object.assign({}, question);
    newQuestion.list.push("");
    setQuestion(newQuestion);
  };

  return (
    <div>
      <Card className="shadow">
        <CardHeader>
          {props.number}. Quiz
          <a
            onClick={() => {
              props.removeQuestion(props.number - 1);
            }}
            href="javascript:void(0)"
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
          <CardText>
            <input
              type="hidden"
              name={`questions[${props.number - 1}][type]`}
              value="quiz"
            />
            <hr></hr>

            {question.list.map((value, index) => {
              return (
                <FormGroup row>
                  <Label for="name" sm={2}>
                    Option {index + 1}:
                  </Label>
                  <Col sm={10}>
                    <Input
                      required
                      type="text"
                      name={`questions[${props.number - 1}][options][${index}]`}
                      id="name"
                      placeholder="with a placeholder"
                    />
                  </Col>
                </FormGroup>
              );
            })}

            <a href="javascript:void(0)" onClick={() => addQuestion()}>
              Add option <FontAwesomeIcon icon={faPlusSquare} />
            </a>
          </CardText>
        </CardBody>
      </Card>
      <br></br>
    </div>
  );
}

export default Quiz;

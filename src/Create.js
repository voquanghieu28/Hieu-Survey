/***********************************************************************************
 * Author:         QUANG HIEU VO
 * Date:           April 10, 2021
 * Assignment:     Culmination project, COIS 3420H Winter 2021
 * Parameters:     N/A
 * References:     N/A
 * Revisions:      N/A
 ************************************************************************************/
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  Card,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import Quiz from "./components/create/Quiz";
import MultiSelect from "./components/create/MultiSelect";
import TextAnswer from "./components/create/TextAnswer";
import TrueFalse from "./components/create/TrueFalse";
import Range from "./components/create/Range";
import MyNavbar from "./components/MyNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { faParagraph } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

/** CREATE SURVEY PAGE */
function Create() {
  const [questionList, setQuestionList] = useState([]);
  const [removeIndex, setRemoveIndex] = useState(null);
  const bottomRef = useRef();

  /** Set removed index on start */
  useEffect(() => {
    if (removeIndex == -1) return;
    const newList = questionList.slice();
    newList.splice(removeIndex, 1);
    setQuestionList(newList);
    setRemoveIndex(-1);
  }, [removeIndex]);

  /** Function to add quiz to survey */
  const addQuiz = () => {
    const newList = questionList.slice();
    newList.push(<Quiz removeQuestion={setRemoveIndex}></Quiz>);
    setQuestionList(newList);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  /** Function to add multiselect to survey */
  const addMulti = () => {
    const newList = questionList.slice();
    newList.push(<MultiSelect removeQuestion={setRemoveIndex}></MultiSelect>);
    setQuestionList(newList);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  /** Function to add text answers to survey */
  const addTextAnswer = () => {
    const newList = questionList.slice();
    newList.push(<TextAnswer removeQuestion={setRemoveIndex}></TextAnswer>);
    setQuestionList(newList);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  /** Function to add T/F question to survey */
  const addTrueFalse = () => {
    const newList = questionList.slice();
    newList.push(<TrueFalse removeQuestion={setRemoveIndex}></TrueFalse>);
    setQuestionList(newList);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  /** Function to add range question to survey */
  const addRange = () => {
    const newList = questionList.slice();
    newList.push(<Range removeQuestion={setRemoveIndex}></Range>);
    setQuestionList(newList);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  /** Rendering page */
  return (
    <div className="App">
      <MyNavbar />
      <Container fluid>
        <Row style={{ minHeight: "100vh" }}>
          {/** Left navigation bar of the dashboard */}
          <Col
            md={2}
            style={{
              backgroundColor: "#d0dbd3",
              position: "-webkit-sticky",
              position: "sticky",
              top: 0,
            }}
          >
            <br></br>
            <Button
              color="info"
              style={{ width: "100%" }}
              onClick={() => addQuiz()}
              className="shadow"
            >
              {" "}
              <FontAwesomeIcon icon={faCheckCircle} /> Add Quiz
            </Button>
            <hr></hr>
            <Button
              color="success"
              style={{ width: "100%" }}
              onClick={() => addMulti()}
              className="shadow"
            >
              <FontAwesomeIcon icon={faListAlt} /> Add Multiselect
            </Button>
            <hr></hr>
            <Button
              color="warning"
              style={{ width: "100%" }}
              onClick={() => addTextAnswer()}
              className="shadow"
            >
              <FontAwesomeIcon icon={faParagraph} /> Add Text Answers
            </Button>
            <hr></hr>
            <Button
              color="primary"
              style={{ width: "100%" }}
              onClick={() => addTrueFalse()}
              className="shadow"
            >
              <FontAwesomeIcon icon={faCheck} /> Add True/False
            </Button>
            <hr></hr>
            <Button
              color="secondary"
              style={{ width: "100%" }}
              onClick={() => addRange()}
              className="shadow"
            >
              <FontAwesomeIcon icon={faSlidersH} /> Add range select
            </Button>
          </Col>

          {/** Main content */}
          <Col
            md={10}
            style={{
              backgroundColor: "#e9ebf0",
              boxShadow: "inset 5px 1px 15px -8px",
              //backgroundImage: `url("https://source.unsplash.com/1600x900/?nature")`,
            }}
          >
            <Form
              id="create-form"
              method="POST"
              action="https://survey-hieu.herokuapp.com/home"
            >
              <Card
                className="shadow p-3 mb-5 bg-white "
                style={{
                  marginTop: 30,
                  padding: 0,
                }}
              >
                <div class="card-header">
                  <h2 style={{ fontSize: 30, fontWeight: 10 }}>
                    CREATE SURVEY DASHBOARD
                  </h2>
                </div>
                <br></br>

                {/** Survey tile */}
                <FormGroup row>
                  <Label for="name" sm={2}>
                    <h5 style={{ fontWeight: 30 }}>Survey title:</h5>
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="with a placeholder"
                      required
                    />
                  </Col>
                </FormGroup>

                {/** Survey description */}
                <FormGroup row>
                  <Label for="name" sm={2}>
                    <h5 style={{ fontWeight: 30 }}> Description:</h5>
                  </Label>
                  <Col sm={10}>
                    <Input
                      rows="4"
                      type="textarea"
                      name="description"
                      id="description"
                      placeholder="with a placeholder"
                      required
                    />
                  </Col>
                </FormGroup>
              </Card>

              {/** Survey questions */}
              <hr></hr>
              <ul>
                {questionList.map((value, index) => {
                  return React.cloneElement(value, { number: index + 1 });
                })}
              </ul>

              {/** Submit button */}
              <Button
                disabled={!questionList.length}
                type="submit"
                color="secondary"
                outline
                size="lg"
                block
                className="shadow"
              >
                <FontAwesomeIcon icon={faPlusSquare} /> Create survey!
              </Button>
              <div ref={bottomRef}></div>
              <br></br>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Create;

/** END OF FILE */

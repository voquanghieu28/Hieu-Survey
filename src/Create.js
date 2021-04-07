//import './App.css';
import {
  Container, Row, Col,
  Button,
  Input, Form, FormGroup, Label
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';

import Quiz from './components/create/Quiz';
import MultiSelect from './components/create/MultiSelect';
import TextAnswer from './components/create/TextAnswer';
import TrueFalse from './components/create/TrueFalse';
import Range from './components/create/Range';
import MyNavbar from './components/MyNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { faParagraph } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

//import { Button } from 'bootstrap';

function Create() {

  const [questionList, setQuestionList] = useState([]);  
  const [removeIndex, setRemoveIndex] = useState(null);  
  const bottomRef = useRef();

  useEffect(() => {
    if(removeIndex==-1) return
    const newList = questionList.slice();
    newList.splice(removeIndex, 1)
    setQuestionList(newList);
    setRemoveIndex(-1)
  },[removeIndex])

  const addQuiz = () => {
    const newList = questionList.slice();
    newList.push(<Quiz removeQuestion={setRemoveIndex}></Quiz>);
    setQuestionList(newList);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const addMulti = () => {
    const newList = questionList.slice();
    newList.push(<MultiSelect removeQuestion={setRemoveIndex}></MultiSelect>);
    setQuestionList(newList);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const addTextAnswer = () => {
    const newList = questionList.slice();
    newList.push(<TextAnswer removeQuestion={setRemoveIndex}></TextAnswer>);
    setQuestionList(newList);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const addTrueFalse = () => {
    const newList = questionList.slice();
    newList.push(<TrueFalse removeQuestion={setRemoveIndex}></TrueFalse>);
    setQuestionList(newList);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const addRange = () => {
    const newList = questionList.slice();
    newList.push(<Range removeQuestion={setRemoveIndex}></Range>);
    setQuestionList(newList);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
    
  }

 
  
  
  return (
    <div className="App">
      <MyNavbar />
      <Container fluid >
        <Row style={{minHeight : '100vh'}}>
          <Col md={2} style={{backgroundColor : '#d0dbd3',  position: '-webkit-sticky', position: 'sticky', top: 0}}>
            <br></br>
            <Button color="info" style={{width : '100%'}} onClick={() => addQuiz()}> <FontAwesomeIcon icon={faCheckCircle} /> Add Quiz</Button>
            <hr></hr>
            <Button color="success" style={{width : '100%'}} onClick={() => addMulti()}><FontAwesomeIcon icon={faListAlt} /> Add Multiselect</Button>
            <hr></hr>
            <Button color="warning" style={{width : '100%'}} onClick={() => addTextAnswer()}><FontAwesomeIcon icon={faParagraph} /> Add Text Answers</Button>
            <hr></hr>
            <Button color="primary" style={{width : '100%'}} onClick={() => addTrueFalse()}><FontAwesomeIcon icon={faCheck} /> Add True/False</Button>
            <hr></hr>
            <Button color="secondary" style={{width : '100%'}} onClick={() => addRange()}><FontAwesomeIcon icon={faSlidersH} /> Add range select</Button>
          
           
          </Col>
          
          <Col md={10} style={{backgroundColor : '#e9ebf0'}}>
            <Form id ="create-form"method="POST" action="https://survey-hieu.herokuapp.com/home">
              <br></br>
              <h2 className="display-4">Create survey dashboard</h2>
              <br></br>
              <FormGroup row>
                <Label for="name" sm={2}><h5>Survey title:</h5></Label>
                <Col sm={10}>
                  <Input type="text" name="name" id="name" placeholder="with a placeholder" required/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="name" sm={2}><h5>Description:</h5></Label>
                    <Col sm={10}>
                    <Input rows="4" type="textarea" name="description" id="description" placeholder="with a placeholder" required/>
                    </Col>
              </FormGroup>
              
              <hr></hr>

              <ul>
                {questionList.map((value, index) => {
                  return React.cloneElement(
                    value, {number: index+1}
                  )
                })}
              </ul>
              
              

                <Button disabled={!questionList.length} type="submit" color="secondary" outline size="lg" block><FontAwesomeIcon icon={faPlusSquare} /> Create survey!</Button>
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

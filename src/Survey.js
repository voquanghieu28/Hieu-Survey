/***********************************************************************************
* Author:         QUANG HIEU VO
* Date:           April 10, 2021     
* Assignment:     Culmination project, COIS 3420H Winter 2021
* Parameters:     N/A
* References:     N/A
* Revisions:      N/A
************************************************************************************/
import {
  Container, Row, Col,
  Button,
  Input, Form, FormGroup, Label
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import Quiz from './components/display/Quiz';
import MultiSelect from './components/display/MultiSelect';
import TextAnswer from './components/display/TextAnswer';
import TrueFalse from './components/display/TrueFalse';
import Range from './components/display/Range';
import MyNavbar from './components/MyNavbar';

/** EDIT SURVEY PAGE */
function Survey() {

    /** Storing page variables*/
    const [survey, setSurvey]     = useState({questions:[], name:"", description:""});
    const [error, setError]       = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const search                  = useLocation().search;
    const idParam                 = new URLSearchParams(search).get('id');

    /** Storing timer data */
    var minutes;
    var seconds;
    var totalSeconds = 0;
  
    /** Function to start the timer */
    const startCount = () => {
        ++totalSeconds;
        seconds.innerHTML = formatTime(totalSeconds%60);
        minutes.innerHTML = formatTime(parseInt(totalSeconds/60));
    }

    /** Function to format time for output*/
    const formatTime = (time) => {
        var timeString = time + "";
        return timeString.length == 2 ? timeString : "0" + timeString
    }

    /** Fetch api to get list of questions */
    useEffect(() => {
        fetch("https://survey-hieu.herokuapp.com/api?id="+idParam)
          .then(res => res.json())
          .then(
            // If there is result then set the result
            (result) => {
              setIsLoaded(true);
              setSurvey(result);
              minutes = document.getElementById("min");
              seconds = document.getElementById("sec");
              setInterval(startCount, 1000);
              
            },
            // If there is error then set error message
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

    /** Function to render question base on question type */
    const renderQuestion = (value, index) => {
        if (value.type=="quiz")
            return <Quiz name={value.name} options={value.options} type={value.type} number={index+1}></Quiz>
        if (value.type=="multi")
            return <MultiSelect name={value.name} options={value.options} type={value.type} number={index+1}></MultiSelect>
        if (value.type=="tf")
            return <TrueFalse name={value.name} type={value.type} number={index+1}></TrueFalse>
        if (value.type=="text")
            return <TextAnswer name={value.name} type={value.type} number={index+1}></TextAnswer>
        if (value.type=="range")
            return <Range name={value.name} type={value.type} number={index+1}></Range>
        return <h1>{value.name}</h1>
    }



  /** Rendering survey page */
  return (
    <div className="App">
      <MyNavbar />

      <Container fluid>
        <Form method="POST" action="https://survey-hieu.herokuapp.com/survey">
        <Row>
          {/** Timing clock */}
          <Col md={2} style={{backgroundColor : '#d0dbd3',    top: 0}}>
                <center>
                    <br></br>
                <h4>Time taken</h4>
                <h2><label id="min">00</label>:<label id="sec">00</label></h2>
                </center>
                <Button type="submit" color="primary" style={{width : '100%', bottom: '10px'}}>Submit Survey</Button>
                <br></br><br></br>
          </Col>

          {/** Survery questions */}
          <Col md={10}>
            <br></br>
            <h2>{survey.name}</h2>
            <p>
                {survey.description}
            </p>
            {/** Email input fields */}
            <FormGroup row>
                <Label for="name" sm={1}>Email:</Label>
                <Col sm={11}>
                  <Input required type="email" name="email" id="email" placeholder="with a placeholder" />
                </Col>
              </FormGroup>

              {/** Phone input fields */}
              <FormGroup row>
                <Label for="name" sm={1}>Phone:</Label>
                  <Col sm={11}>
                    <Input required rows="4" type="text" name="phone" id="phone" placeholder="with a placeholder" />
                  </Col>
            </FormGroup>
            <input type="hidden" name="surveyId" value={survey._id}/>

            {/** Rendering questions */}
            {survey.questions.map((value, index) => {
               return renderQuestion(value, index)
            })}
            
          </Col>
        </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Survey;

/** END OF FILE */
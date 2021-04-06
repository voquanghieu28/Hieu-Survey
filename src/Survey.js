//import './App.css';
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

//import { Button } from 'bootstrap';

function Survey() {

    const [survey, setSurvey] = useState({
        questions:[], name:"", description:""}
    );
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const search = useLocation().search;
    const idParam = new URLSearchParams(search).get('id');

    var minutes;
    var seconds;
    var totalSeconds = 0;
  
    const startCount = () => {
        ++totalSeconds;
        seconds.innerHTML = formatTime(totalSeconds%60);
        minutes.innerHTML = formatTime(parseInt(totalSeconds/60));
    }

    const formatTime = (time) => {
        var timeString = time + "";
        return timeString.length == 2 ? timeString : "0" + timeString
    }

    useEffect(() => {
        fetch("https://survey-hieu.herokuapp.com/api?id="+idParam)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setSurvey(result);


              minutes = document.getElementById("min");
              seconds = document.getElementById("sec");
              setInterval(startCount, 1000);
              
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )

         
          
      }, [])

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




  return (
    <div className="App">
      <MyNavbar />

      <Container fluid>
        <Form method="POST" action="https://survey-hieu.herokuapp.com/survey">
        <Row>
          <Col md={2} style={{backgroundColor : '#d0dbd3', height : '100vh', position: '-webkit-sticky', position: 'sticky', top: 0}}>
                <center>
                    <br></br>
                <h4>Time remaining</h4>
                <h2><label id="min">00</label>:<label id="sec">00</label></h2>
                </center>
                <Button type="submit" color="primary" style={{width : '100%', bottom: '10px'}}>Submit Survey</Button>
                
          </Col>
          <Col md={10}>

            <br></br>
            <h2>{survey.name}</h2>
            <p>
                {survey.description}
            </p>
            <FormGroup row>
                <Label for="name" sm={1}>Email:</Label>
                <Col sm={11}>
                  <Input required type="email" name="email" id="email" placeholder="with a placeholder" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="name" sm={1}>Phone:</Label>
                  <Col sm={11}>
                    <Input required rows="4" type="text" name="phone" id="phone" placeholder="with a placeholder" />
                  </Col>
            </FormGroup>
            <input type="hidden" name="surveyId" value={survey._id}/>


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

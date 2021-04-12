//import './App.css';
import {
    Container, Row, Col,
  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import React, { useState, useEffect } from 'react';
  import MyNavbar from './components/MyNavbar';
  
  //import { Button } from 'bootstrap';
  
  function ResultList() {
  
      const [survey, setSurvey] = useState([]
      );
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);

      
  
   
      useEffect(() => {
          fetch("https://survey-hieu.herokuapp.com/list")
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setSurvey(result);
                //setState(result);
                console.log(survey)
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )    
        }, [])

    const handleEdit = (e) => {
        e.preventDefault()
        alert("Unable to edit since this survey is set to publish mode")
    }
  
  
  
    return (
      <div className="App">
        <MyNavbar />
        <div style={{height : '100vh', backgroundColor : '#6495ED'}}>
        <Container style={{height : '100vh', backgroundColor : 'white'}}>
          <Row>
            
           
              <div>
              <br></br>
              <h1 className="display-4">&nbsp;Choose a survey to edit</h1>
              
              <ol style={{fontSize : '25px'}}>
                <table>
                {survey.map((value, index) => {  
                  return  <tr>
                            <td>
                              <a href="" onClick={e => { handleEdit(e)}}>{index+1}. {value.name}   </a>
                            </td> 
                            <td style={{fontSize : '15px'}}>
                              <i>&nbsp;&nbsp;&nbsp;&nbsp;({new Date(value.created).toDateString()})</i>
                            </td>
                          </tr>
                })}
                </table>
              </ol>
              </div>
           
          </Row>
        </Container>
        </div>
      </div>
    );
  }
  
  export default ResultList;
  
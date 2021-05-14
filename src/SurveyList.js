/***********************************************************************************
* Author:         QUANG HIEU VO
* Date:           April 10, 2021     
* Assignment:     Culmination project, COIS 3420H Winter 2021
* Parameters:     N/A
* References:     N/A
* Revisions:      N/A
************************************************************************************/
import {Container, Row, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import MyNavbar from './components/MyNavbar';
  
  
/** SURVEY LIST PAGE */
function SurveyList() {

  /** Storing page variables*/
  const [survey, setSurvey] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  /** Fetch api to get survey list */
  useEffect(() => {
    fetch("https://survey-hieu.herokuapp.com/list")
      .then(res => res.json())
      .then(
        // If there is result then set the result
        (result) => {
          setIsLoaded(true);
          setSurvey(result);
          //setState(result);
          console.log(survey)
          
        },
        // If there is error then set error message
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )    
  }, [])

  /** Rendering page */
  return (
    <div className="App">
        <MyNavbar />
        <div style={{height : '100vh', backgroundColor : '#87CEEB'}}>
          <Container style={{height : '100vh', backgroundColor : 'white'}}>
          <Row>   
            <div >
            <br></br>
            <h1 className="display-4">&nbsp;Choose a survey to take</h1>
            
            {/** Render list of surveys */}
            <ol style={{fontSize : '25px'}}>
              <table>
                {survey.map((value, index) => {  
                  return  <tr>
                            <td>
                              <a href={window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/survey?id=' + value._id}>{index+1}. {value.name}   </a>
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
  
export default SurveyList;
  
/** END OF FILE */
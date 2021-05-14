/***********************************************************************************
* Author:         QUANG HIEU VO
* Date:           April 10, 2021     
* Assignment:     Culmination project, COIS 3420H Winter 2021
* Parameters:     N/A
* References:     N/A
* Revisions:      N/A
************************************************************************************/
import { Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import MyNavbar from './components/MyNavbar';
  
  
/** EDIT SURVEY PAGE */
function ResultList() {
    
    /** Storing page variables*/
    const [survey, setSurvey]       = useState([]);
    const [error, setError]         = useState(null);
    const [isLoaded, setIsLoaded]   = useState(false);

    /** Fetch api to get survey list */
    useEffect(() => {
        fetch("https://survey-hieu.herokuapp.com/list")
        .then(res => res.json())
        .then(
            // If there is result then set the result
            (result) => {
            setIsLoaded(true);
            setSurvey(result);
            }, 
            // If there is error then set error message
            (error) => {   
            setIsLoaded(true);
            setError(error);
            }
        )    
    }, [])

    /** Handle edit onclick event */
    const handleEdit = (e) => {
        e.preventDefault()
        alert("Unable to edit since this survey is set to publish mode")
    }
  
    /** Rendering page */
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
                {/** Render list of surveys */}
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
  
/** END OF FILE */
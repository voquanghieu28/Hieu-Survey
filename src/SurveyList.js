//import './App.css';
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
    Container, Row, Col,
    Button,
    Input, Form, FormGroup, Label
  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import React, { useState, useCallback, useEffect, setState } from 'react';

  
  import Quiz from './components/display/Quiz';
  import MultiSelect from './components/display/MultiSelect';
  import TextAnswer from './components/display/TextAnswer';
  import TrueFalse from './components/display/TrueFalse';
  import MyNavbar from './components/MyNavbar';
  
  //import { Button } from 'bootstrap';
  
  function SurveyList() {
  
      const [survey, setSurvey] = useState([]);
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

    return (
      <div className="App">
        
          <MyNavbar />
  
          <div style={{height : '100vh', backgroundColor : '#87CEEB'}}>
            <Container style={{height : '100vh', backgroundColor : 'white'}}>

            <Row>
                    
                    
              
                <div >
                <br></br>
                <h1 className="display-4">Choose a survey to take</h1>
                
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
  
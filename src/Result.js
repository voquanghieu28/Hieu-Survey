/***********************************************************************************
* Author:         QUANG HIEU VO
* Date:           April 10, 2021     
* Assignment:     Culmination project, COIS 3420H Winter 2021
* Parameters:     N/A
* References:     N/A
* Revisions:      N/A
************************************************************************************/
import { Container, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import MyNavbar from './components/MyNavbar';
  

/** RESULT PAGE */
function Result() {
  
  /** Storing page variables */
  const [results, setResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const search = useLocation().search;
  const idParam = new URLSearchParams(search).get('id');
   
  /** Fetch api to get survey lists */
  useEffect(() => {
      fetch("https://survey-hieu.herokuapp.com/result?id="+idParam)
        .then(res => res.json())
        .then(
          (result) => {
            setResults(result) // If there is result then set the result
          },
          (error) => {
            setIsLoaded(true); // If there is error then set error message
          }
        )
    },[])
           
    /** Rendering page */
    return (
      <div className="App">
        <MyNavbar />
  
        <Container  classNam="container-md">
          <Table responsive striped hover className='mt-3' >
              {/** Table header */}
              <thead style={{backgroundColor: '#b9b9c4', position: "sticky", top:0 }}>
                  <tr>
                      <th></th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Answers</th>
                  </tr>
              </thead>
              <tbody>
                {/** Render list of questions */}
                {results.map((value, index) => {
                  return <tr>
                            <td scope="row">{index+1}</td>
                            <td>{value.email}</td>
                            <td>{value.phone}</td>
                            <td>
                                {Object.keys(value.questions).map(function(key, index) {
                                  return <div>
                                      <b>{index+1}. {key}</b>
                                      <p>{Array.isArray(value.questions[key]) ? value.questions[key].filter(function(val, ind, arr){ return val!="";}).join(", "):value.questions[key]}</p>
                                  </div>
                                })}
                            </td>     
                          </tr>
                })}  
              </tbody>
          </Table>
        </Container>
      </div>
    );
  }
export default Result;

/** END OF FILE */
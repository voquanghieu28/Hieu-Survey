/***********************************************************************************
 * Author:         QUANG HIEU VO
 * Date:           April 10, 2021
 * Assignment:     Culmination project, COIS 3420H Winter 2021
 * Parameters:     N/A
 * References:     N/A
 * Revisions:      N/A
 ************************************************************************************/
import { Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import MyNavbar from "./components/MyNavbar";

/** EDIT SURVEY PAGE */
function ResultList() {
  /** Storing page variables*/
  const [survey, setSurvey] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  /** Fetch api to get survey list */
  useEffect(() => {
    fetch("https://survey-hieu.herokuapp.com/list")
      .then((res) => res.json())
      .then(
        // If there is result then set the result
        (result) => {
          setIsLoaded(true);
          setSurvey(result);
          //setState(result);
          console.log(survey);
        },
        // If there is error then set error message
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  /** Rendering page */
  return (
    <div className="App">
      <MyNavbar />
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1483197452165-7abc4b248905?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=2900&ixid=MnwxfDB8MXxyYW5kb218MHx8TkFUVVJFfHx8fHx8MTYzNDI1NjcyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2600")`,
          backgroundAttachment: "fixed",
          minHeight: "95vh",
        }}
      >
        <Container style={{}} className="align-middle">
          <div>
            <Row>
              <div
                className="card mb-4 "
                style={{
                  backgroundColor: "rgba(255,255,255,0.75)",
                  width: "100%",
                  minHeight: "80vh",
                  marginTop: "8vh",
                  alignItems: "center",
                }}
              >
                <br></br>
                <h1
                  className="jumbotron-heading "
                  style={{ fontSize: 60, fontWeight: 300 }}
                >
                  &nbsp;&nbsp;&nbsp;View survey results
                </h1>
                <br></br>
                <br></br>
                <div style={{ width: "78%" }}>
                  <p style={{ fontSize: "20px" }}>
                    &#10054; <i> Select a survey to view result</i>
                  </p>
                </div>
                <table
                  class="table"
                  style={{ fontSize: "20px", maxWidth: "80%" }}
                >
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Survey name</th>
                      <th>Date created</th>
                      <th>No. of people takens</th>
                    </tr>
                  </thead>
                  {/** Render list of surveys */}
                  {survey.map((value, index) => {
                    return (
                      <tr dataHref={"/"}>
                        <td>{index + 1}</td>
                        <td>
                          <a
                            href={
                              window.location.protocol +
                              "//" +
                              window.location.hostname +
                              ":" +
                              window.location.port +
                              "/result?id=" +
                              value._id
                            }
                          >
                            {value.name}{" "}
                          </a>
                        </td>
                        <td style={{ fontSize: "14px" }}>
                          &nbsp;&nbsp;&nbsp;&nbsp;(
                          {new Date(value.created).toDateString()})
                        </td>
                        <td>{Math.floor(Math.random() * 10) + 5}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ResultList;

/** END OF FILE */

/***********************************************************************************
 * Author:         QUANG HIEU VO
 * Date:           April 10, 2021
 * Assignment:     Culmination project, COIS 3420H Winter 2021
 * Parameters:     N/A
 * References:     N/A
 * Revisions:      N/A
 ************************************************************************************/
import { Container, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import { Row } from "reactstrap";

/** RESULT PAGE */
function Result() {
  /** Storing page variables */
  const [results, setResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const search = useLocation().search;
  const idParam = new URLSearchParams(search).get("id");

  /** Fetch api to get survey lists */
  useEffect(() => {
    fetch("https://survey-hieu.herokuapp.com/result?id=" + idParam)
      .then((res) => res.json())
      .then(
        (result) => {
          setResults(result); // If there is result then set the result
        },
        (error) => {
          setIsLoaded(true); // If there is error then set error message
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
                  &nbsp;&nbsp;&nbsp;Statistic
                </h1>
                <br></br>
                <br></br>
                <div style={{ width: "78%" }}>
                  <p style={{ fontSize: "20px" }}>
                    &#10054; <i> Select a survey to view result</i>
                  </p>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default Result;

/** END OF FILE */

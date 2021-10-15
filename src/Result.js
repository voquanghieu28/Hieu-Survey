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
          minheight: "95vh",
          backgroundImage: `url("https://images.unsplash.com/photo-1483197452165-7abc4b248905?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=2900&ixid=MnwxfDB8MXxyYW5kb218MHx8TkFUVVJFfHx8fHx8MTYzNDI1NjcyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2600")`,
          backgroundAttachment: "fixed",
        }}
      >
        <Container classNam="container-md" style={{ minHeight: "100vh" }}>
          <br></br>
          <br></br>
          {results.length == 0 ? (
            <div
              style={{ color: "#990000" }}
              className="alert alert-secondary"
              role="alert"
            >
              <h1 style={{ fontWeight: "400" }}>
                &#9888; No one has took this survey yet!!!
              </h1>
              <p style={{ fontSize: "20px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please
                come back later!
              </p>
            </div>
          ) : (
            <Table
              responsive
              striped
              hover
              className="mt-3"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              {/** Table header */}
              <thead
                style={{
                  backgroundColor: "#b9b9c4",
                  position: "sticky",
                  top: 0,
                }}
              >
                <tr style={{ fontSize: 20, fontWeight: 400 }}>
                  <th>No.</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Answers</th>
                </tr>
              </thead>
              <tbody>
                {/** Render list of questions */}
                {results.map((value, index) => {
                  return (
                    <tr>
                      <td scope="row">{index + 1}</td>
                      <td>{value.email}</td>
                      <td>{value.phone}</td>
                      <td>
                        {Object.keys(value.questions).map(function (
                          key,
                          index
                        ) {
                          return (
                            <div>
                              <b>
                                {index + 1}. {key}
                              </b>
                              <p>
                                {Array.isArray(value.questions[key])
                                  ? value.questions[key]
                                      .filter(function (val, ind, arr) {
                                        return val != "";
                                      })
                                      .join(", ")
                                  : value.questions[key]}
                              </p>
                            </div>
                          );
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
          <br></br>
        </Container>
      </div>
    </div>
  );
}
export default Result;

/** END OF FILE */

/***********************************************************************************
 * Author:         QUANG HIEU VO
 * Date:           April 10, 2021
 * Assignment:     Culmination project, COIS 3420H Winter 2021
 * Parameters:     N/A
 * References:     N/A
 * Revisions:      N/A
 ************************************************************************************/
import {
  Container,
  Table,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Col,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import {
  faSearch,
  faSortNumericDown,
  faMailBulk,
  faPhone,
  faQuestion,
  faFilePdf,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactToPdf from "react-to-pdf";

/** RESULT PAGE */
function Result() {
  /** Storing page variables */
  const [results, setResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const search = useLocation().search;
  const idParam = new URLSearchParams(search).get("id");
  const [searchValue, setSearchValue] = useState("");
  const ref = React.createRef();
  /** Fetch api to get survey lists */
  useEffect(() => {
    fetch("https://survey-hieu.herokuapp.com/result?id=" + idParam)
      .then((res) => res.json())
      .then(
        (result) => {
          setResults(result); // If there is result then set the result
          setDisplayResults(result);
        },
        (error) => {
          setIsLoaded(true); // If there is error then set error message
        }
      );
  }, []);

  const [displayResults, setDisplayResults] = useState([]);
  const onChangeText = (text) => {
    setSearchValue(text);
    var filteredResults;

    if (text.length == 0) filteredResults = results;
    else
      filteredResults = results.filter((element) => {
        return element.email.toLowerCase().includes(text.toLowerCase());
      });

    setDisplayResults(filteredResults);
  };

  const foo = [];
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
        <Container style={{ minHeight: "100vh" }} fluid>
          <br></br>

          <div className="float-right" style={{ height: "70px" }}>
            <div
              className="card mb-4 "
              style={{
                backgroundColor: "rgba(255,255,255,0.65)",
                width: "650px",
                minHeight: "10px",
                //marginTop: "8vh",
                alignItems: "right",
                padding: "10px",
                paddingTop: "14px",
                paddingBottom: "2px",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <FormGroup row style={{ width: "650px" }}>
                <Label for="exampleEmail" sm={3} style={{ fontSize: "15px" }}>
                  <FontAwesomeIcon icon={faSearch} />
                  &nbsp;Search by email:
                </Label>
                <Col sm={6}>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="john@gmail.com"
                    type="email"
                    value={searchValue}
                    onChange={(e) => {
                      onChangeText(e.target.value);
                    }}
                  />
                </Col>
                <Col sm={3}>
                  <ReactToPdf
                    targetRef={ref}
                    filename="answers.pdf"
                    scale={0.52}
                  >
                    {({ toPdf }) => (
                      <Button
                        style={{ width: "100%", fontSize: "14px" }}
                        color="danger"
                        onClick={toPdf}
                      >
                        <FontAwesomeIcon icon={faFilePdf} />
                        &nbsp;Export to PDF
                      </Button>
                    )}
                  </ReactToPdf>
                </Col>
              </FormGroup>
            </div>
          </div>

          <div
            className="card mb-4 "
            style={{
              backgroundColor: "rgba(255,255,255,0.65)",
              width: "250px",
              minHeight: "10px",
              //marginTop: "8vh",
              alignItems: "right",
              padding: "10px",
              paddingTop: "14px",
              paddingBottom: "2px",
              paddingLeft: 10,
              paddingRight: 10,
              color: "green",
            }}
          >
            <h2>
              <FontAwesomeIcon icon={faUser} />
              &nbsp;5 users taken
            </h2>
          </div>

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
            <div ref={ref}>
              <Table
                responsive
                striped
                hover
                className="mt-3"
                style={{
                  backgroundColor: "rgba(255,255,255,0.6)",
                }}
                responsive={true}
                bordered
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
                    <td
                      rowspan="2"
                      style={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      <FontAwesomeIcon icon={faSortNumericDown} />
                    </td>
                    <td
                      rowspan="2"
                      style={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      <FontAwesomeIcon icon={faMailBulk} />
                      &nbsp; Email
                    </td>
                    <td
                      rowspan="2"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      <FontAwesomeIcon icon={faPhone} />
                      &nbsp; Phone
                    </td>

                    <td
                      style={{ fontWeight: "bold", fontSize: "15px" }}
                      colspan={Object.keys(results[0].questions).length}
                    >
                      <FontAwesomeIcon icon={faQuestion} />
                      &nbsp; Questions
                    </td>
                  </tr>

                  <tr>
                    {Object.keys(results[0].questions).map(function (
                      key,
                      index
                    ) {
                      return (
                        <td style={{ fontWeight: "normal", fontSize: "15px" }}>
                          <i>
                            {index + 1}. {key}
                          </i>
                        </td>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {/** Render list of questions */}
                  {displayResults.map((value, index) => {
                    return (
                      <tr>
                        <td scope="row">
                          <u>{index + 1}</u>
                        </td>
                        <td style={{ fontWeight: "normal", fontSize: "15px" }}>
                          <i>{value.email}</i>
                        </td>
                        <td
                          style={{
                            fontWeight: "normal",
                            fontSize: "15px",
                            //borderRightWidth: "1px",
                            //borderRightColor: "grey",
                          }}
                        >
                          <i>{value.phone}</i>
                        </td>

                        {Object.keys(value.questions).map(function (
                          key,
                          index
                        ) {
                          return (
                            <td
                              style={{ fontWeight: "normal", fontSize: "15px" }}
                            >
                              <p>
                                {Array.isArray(value.questions[key])
                                  ? value.questions[key]
                                      .filter(function (val, ind, arr) {
                                        return val != "";
                                      })
                                      .join(", ")
                                  : value.questions[key]}
                              </p>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          )}
          <br></br>
        </Container>
      </div>
    </div>
  );
}
export default Result;

/** END OF FILE */

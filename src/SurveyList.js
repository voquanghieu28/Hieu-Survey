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
import Typewriter from "typewriter-effect";

/** SURVEY LIST PAGE */
function SurveyList() {
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
          console.log("-----------");
          console.log(result);
          setSurvey([...result]);
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
      <section
        className="jumbotron text-center"
        style={{
          backgroundColor: "#e9ebf0",
          boxShadow: "inset 5px 1px 15px -8px",
          backgroundImage: `url("https://images.unsplash.com/photo-1455246772632-66ab9b08e20c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW58fHx8fHwxNjM0MjU1MTQz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2000&h=900")`,
          backgroundAttachment: "fixed",
          boxShadow: "1px 9px  25px -5px",
        }}
      >
        <div className="container">
          <h1
            className="jumbotron-heading "
            style={{ fontSize: 50, fontWeight: 11 }}
          >
            <div
              style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: 4,
                paddingTop: 20,
                paddingBottom: 20,
              }}
              className="shadow"
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Welcom to Survey Rabbit!")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Took our survey to have a chance to win 500$")
                    .start();
                }}
                typeSpeed={30}
              />
            </div>
          </h1>
        </div>
      </section>

      <Container
        style={{
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        {/** Render list of surveys */}
        <div className="row">
          {survey.map((value, index) => {
            return (
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="card mb-4 box-shadow shadow custom-card">
                  <img
                    className="card-img-top"
                    src={"https://source.unsplash.com/1600x900/?" + index}
                    alt="Card image cap"
                  />

                  <div className="card-body">
                    <h3 style={{ fontSize: 25, fontWeight: 350 }}>
                      {value.name}
                    </h3>
                    <p className="card-text">{value.description}</p>

                    <div className="d-flex justify-content-between align-items-center ">
                      <div className="btn-group">
                        <a
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          href={
                            window.location.protocol +
                            "//" +
                            window.location.hostname +
                            ":" +
                            window.location.port +
                            "/survey?id=" +
                            value._id
                          }
                        >
                          Took this survey
                        </a>
                      </div>
                      <small className="text-muted">
                        <i>
                          &nbsp;&nbsp;&nbsp;&nbsp;(
                          {new Date(value.created).toDateString()})
                        </i>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default SurveyList;

/** END OF FILE */

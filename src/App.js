/***********************************************************************************
 * Author:         QUANG HIEU VO
 * Date:           April 10, 2021
 * Assignment:     Culmination project, COIS 3420H Winter 2021
 * Parameters:     N/A
 * References:     N/A
 * Revisions:      N/A
 ************************************************************************************/
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Create from "./Create";
import Survey from "./Survey";
import SurveyList from "./SurveyList";
import ResultList from "./ResultList";
import EditSurvey from "./EditSurvey";
import Result from "./Result";
import Login from "./Login";
import Statistic from "./Statistic";
import CreateAccount from "./CreateAccount";
import StatisticResult from "./StatisticResult";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/create" component={Create} />
        <Route path="/survey" component={Survey} />
        <Route path="/result" component={Result} />
        <Route path="/survey-list" component={SurveyList} />
        <Route path="/edit-survey" component={EditSurvey} />
        <Route path="/(result-list|)" component={ResultList} />
        <Route path="/login" component={Login} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/statistic" component={Statistic} />
        <Route path="/statistic-result" component={StatisticResult} />
      </Router>
    </div>
  );
}

export default App;

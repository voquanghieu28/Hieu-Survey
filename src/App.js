import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';



import Create from './Create'
import Survey from './Survey'
import SurveyList from './SurveyList'
import ResultList from './ResultList'
import Result from './Result'
import Login from './Login'
import CreateAccount from './CreateAccount'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Route path="/create" component={Create}/>
          <Route path="/survey" component={Survey}/>
          <Route path="/result" component={Result}/>
          <Route path="/survey-list" component={SurveyList}/>
          <Route path="/(result-list|)" component={ResultList}/>            
          <Route path="/login" component={Login}/> 
          <Route path="/create-account" component={CreateAccount}/> 

        </Router>
    </div>
  );
}

export default App;

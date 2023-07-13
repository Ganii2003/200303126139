import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllTrains from './components/AllTrains';
import SingleTrain from './components/SingleTrain';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AllTrains} />
          <Route path="/train/:trainId" component={SingleTrain} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ROUTEPATH } from './common/appConstants';
import Login from './views/login/login';
import SignUp from './views/signup/signup';
import './App.css';

function App(props) {
  return (
    <div>
      <style>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </style>
      <BrowserRouter>
        <Switch>
            <Route exact path={ROUTEPATH.LOGIN} component={Login} />
            <Route exact path={ROUTEPATH.INDEX} component={Login} />
            <Route exact path={ROUTEPATH.SIGNUP} component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

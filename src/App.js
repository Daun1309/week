import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Review from "./Review";

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/review/:week_day" exact>
        <Review />
      </Route>
      </Switch>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;

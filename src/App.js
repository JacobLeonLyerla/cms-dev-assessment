import React, { Component } from "react";
import { Button } from "reactstrap";
import ListingsProvider, { ListingsContext } from "./comps/contexts/listingsProvider";

import "./App.css";
import { Route, Link } from "react-router-dom";

import Listings from "./comps/part 1-2/listings"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/listings">
          <Button color="primary">Part 1-2</Button>
        </Link>
        <Link to="/offers"> <Button color="warning">Part 3-4</Button></Link>
        <ListingsProvider><ListingsContext.Consumer>
          {context =>(
             <Route exact path="/listings" render={() => <Listings context={context} />} />
          )}
          
          </ListingsContext.Consumer></ListingsProvider>
       
      </div>
    );
  }
}

export default App;

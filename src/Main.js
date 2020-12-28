import React from 'react';
import Home from './Home';
import Trend from './Trending';
import Sub from './Subscribe';
import Library from './Library';
import { Switch,Route } from "react-router-dom";


function Main() {
    return (
        <div className="main w-full mt-16 top-16 ml-20">
         <Switch >

        

        <Route path="/1">
        <Trend />
        </Route>

        <Route path="/2">
        <Sub />
        </Route>

        <Route path="/3">
        <Library />
        </Route>

        <Route path="/">
        <Home />
        </Route >
        
        </Switch>
           
        </div>
    )
}

export default Main

          

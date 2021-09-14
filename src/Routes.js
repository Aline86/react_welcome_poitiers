import React, {useEffect, useState, useRef, useContext} from 'react'
import Accueil from './Components/Accueil'
import Presentation from './Components/Presentation'
import Actualites from './Components/Actualites'
import Adhesion from './Components/Adhesion'
import Contact from './Components/Contact'
import Nav from './Components/Nav/Nav'

import './App.css';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ThemeContext} from './Context/ThemeContext'


export default function Routes() {

  const {targetRef, setTargetRef} = useContext(ThemeContext)
      //{() => <Accueil toggleHeight={scroll} />} 
  return (
    <>
    

      <BrowserRouter>
      <div className="container">
      <Nav />
        
        <Switch>
          <Route path="/"   exact component={Accueil} />
          <Route path="/Presentation" exact component={Presentation}   />
          <Route path="/Actualites" exact component={Actualites} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Adhesion" exact component={Adhesion} />
          <Route path="/" component={() => <div>ERREUR 404</div>} /> 
        </Switch>
      </div>
      
     
        
        
      </BrowserRouter>

  
      
    </>
  );
}
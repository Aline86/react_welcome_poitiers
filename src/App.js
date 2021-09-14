import React, {useEffect, useState, useRef} from 'react'
import Accueil from './Components/Accueil'
import Presentation from './Components/Presentation'
import Actualites from './Components/Actualites'
import Adhesion from './Components/Adhesion'
import Contact from './Components/Contact'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import Routes from './Routes.js';
import './App.css';
import {ThemeContext} from './Context/ThemeContext'
import ThemeContextProvider from './Context/ThemeContext'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
export default function App() {
  const targetRef = useRef()

    return (
      <>
        <Header />
        <div ref ={targetRef} >
        <ThemeContextProvider targetRef={targetRef}>
        <Routes /> 
        </ThemeContextProvider>
        </div>
        <br />
        <br />
        <Footer />
      </>
    )
}

;

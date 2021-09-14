import React, {useContext} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Nav.css';
import {ThemeContext} from '../../Context/ThemeContext'


    
export default function Nav() {
    console.log("nav")
    const {scroll, setScroll} = useContext(ThemeContext)
    return (
       
        <nav>
            <ul className={
               scroll ? "sidenav fixed" : "sidenav"
            }>
                <NavLink exact activeClassName="current" to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink exact activeClassName="current" to="/Presentation">
                    <li>Presentation</li>
                </NavLink>
                <NavLink exact activeClassName="current" to="/Actualites">
                    <li>Actualités</li>
                </NavLink> 
                <NavLink exact activeClassName="current" to="/Contact">
                    <li>Contact</li>
                </NavLink>
                <NavLink exact activeClassName="current" to="/Adhesion">
                    <li>Bulletin d'adhésion</li>
                </NavLink>                      
            </ul>
        </nav>
  
    )
}
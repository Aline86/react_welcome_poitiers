import React, {useContext} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import presentation from '../img/presentation.png'
import {ThemeContext} from '../Context/ThemeContext'


    
export default function Projet(){
    const {scroll, setScroll} = useContext(ThemeContext)
    return (
        <div>
            <div className={scroll? "margin" : ""} >
                <br />
                <br />
                <img className="fullimg" src={presentation} alt="presentation association flyer" />  
            </div>
            <br />
            <br />
        </div>
    )
}
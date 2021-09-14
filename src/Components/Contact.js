import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Contact(){
    const location = useLocation();
   
    return (
        <>
        <div>
            <br />
        <h1 className="left">CONTACT</h1>
        <br />
        <br />
        <p><b>Adresse email: </b> welcomepoitiers@outlook.fr</p>
        <br />
        <p><b>Adresse postale: </b> 23-25, rue du Général Sérail 86000 POITIERS</p>
        </div>
        </>
    )
}
import React from 'react'
import {useLocation} from 'react-router-dom'
import bulletin_adhesion from '../img/bulletin_adhesion.pdf'
export default function Adhesion(){
    const location = useLocation();
   
    return (
        <>
        <div>
        <br />
        <br />
        <h1 className="left">Nous rejoindre</h1>
        <p> Vous souhaitez rejoindre l'association, devenir famille d'accueil ou bien renouveler votre adhésion ?
            Télécharger le formulaire d'adhésion.
        </p>
        <br />
     
            <button className="gray_button"><a className="no_decoration" href={bulletin_adhesion}>Télécharger le bulletin d'adhésion</a></button>
        </div>
   
        </>
    )
}
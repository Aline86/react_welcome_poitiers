import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from '../../img/logo.png'
import facebook from '../../img/facebook.png'
import statut from '../../img/statut.pdf'
import './Footer.css'
import {Link} from 'react-router-dom'
import Iframe from 'react-iframe'

export default function Footer() {
    return (
        <div className="footer">
            <div className="contain">
                <div className="flex2">
                    <div className="lien2">
                        <div>
                            <div className="flex">
                                <a  href="https://www.facebook.com/WelcomePoitiers"><img className="smallerfb"  alt="facebook" src={facebook} /></a><span className="dec"><a className="textdecoration" href="https://www.facebook.com/WelcomePoitiers">Réseaux Sociaux</a></span>
                            </div>
                            <br />
                            <div>
                                <a className="status" href={statut} target="_blank">Voir nos
                                    Statuts</a>
                            </div>
                        </div>
                    </div>
                    <div className="adresse">
                        <h3>Welcome Poitiers</h3>
                        <br/>
                        <span>23-25, rue du Général Sérail</span>
                        <br/>
                        <span>86000 POITIERS</span>
                    </div>
                    <div className="map">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2741.890861295759!2d0.34070351547080496!3d46.58939487913041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fdbe76eb056bc1%3A0xb16f1b2037388dfd!2s23%20Rue%20du%20G%C3%A9n%C3%A9ral%20Sarrail%2C%2086000%20Poitiers!5e0!3m2!1sfr!2sfr!4v1605451424659!5m2!1sfr!2sfr"
                                width="70%" height="auto" frameborder="0" style="border:0;" allowfullscreen=""
                                aria-hidden="false" tabindex="0"></Iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

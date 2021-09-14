import React from 'react'
import {useLocation} from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from '../../img/logo.png'
import facebook from '../../img/facebook.png'
import './Header.css'
import {Link} from 'react-router-dom'

export default function Header(){
    
    return (
        <div>
            
            <div className="haut">
                <div className="logo"><a href="/"><img className="img" src={logo}/></a></div>
                <div className="titre"><h1>WELCOME POITIERS</h1></div>
                <div className="logo facebook"><a href="https://www.facebook.com/WelcomePoitiers"><img className="fb" src={facebook} /></a></div>
            </div>
            
            <div className="caroussel">
                <Carousel autoPlay = {true} dynamicHeight={false} interval={10000} showIndicators={false} infiniteLoop={true} showThumbs={false} transitionTime={1000} showStatus={false} showArrows={false} >
                    <div className="center">"L’accueil, c’est nouer une relation humaine privilégiée, découvrir une
                        culture, et c’est moins compliqué <br/> qu’on pourrait l’imaginer", Benoît Weeger, tuteur et
                        famille d'accueil
                    </div>
            
        
                    <div className="center">"Welcome m’a permis de trouver un toit pour me poser et avancer" Cheik,
                        accueilli à Welcome Poitiers
                    </div>
            
            
                    <div className="center">"On s’accompagne les uns les autres, les tuteurs, les familles.<br/> Il y a un
                        vrai suivi des situations, personne n’est isolé. Au final, <br/> c’est un peu comme si on
                        recevait un ami", Maryline tourancheau, vice-présidente
                    </div>
                </Carousel>   
            </div>             
        </div>
       
    )
}
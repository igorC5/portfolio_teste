import {React, useRef}  from "react"

import './LandingPage.css';
import DevReactTexto from "./DevReactText";
import Contatos from "./Contatos";
import VerMaisBtn from "./VerMaisBtn";

import githubLogo from './assets/githubWhite.png' 
import phoneIcon from './assets/phoneIcon.png'
import emailIcon from './assets/emailIcon.png'
import reactIcon from './assets/reactIcon.webp'

function LandingPage(){

    return (
        <div>
            <div className="fundo1">
                <br></br><br></br><br></br>
                <div className="infosContainer">
                    <div className="leftInfos">
                        <div className="upperLeft">
                            <h1 className="meuNome">Igor Cândido</h1>
                        </div>
                        <div className="bottomLeft">
                            <img 
                                className="reactIcon"
                                src={reactIcon} 
                                alt="react icon"
                            ></img>
                            <div className="devReactTexto">
                                <DevReactTexto></DevReactTexto>
                            </div>
                        </div>
                    </div>
                    <div className="rightInfos">
                        <Contatos
                        imagemURL={githubLogo}
                        imagemAlt="github icon"
                        texto="https://github.com/igorC5"
                        isGit={true}
                        ></Contatos>
                        <br></br>
                        <Contatos
                        imagemURL={emailIcon}
                        imagemAlt="email icon"
                        texto="igorcandidofs@gmail.com"
                        ></Contatos>
                        <br></br>
                        <Contatos
                        imagemURL={phoneIcon}
                        imagemAlt="phone icon"
                        texto="+55 46 98824-3039"
                        ></Contatos>
                        <br></br>
                        <Contatos
                        imagemURL={phoneIcon}
                        imagemAlt="phone icon"
                        texto="+55 46 98824-3039"
                        ></Contatos>
                    </div>
                </div>
                <div>
                <VerMaisBtn></VerMaisBtn>
                </div>
                
                
            </div>
            
            <div id="fundo2">
                <p>ola</p>
            </div>
            
            <div id="fundo3">
                <p>ola</p>
            </div>
            
        </div>
    )
}

export default LandingPage
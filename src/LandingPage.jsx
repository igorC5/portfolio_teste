import {React, useRef}  from "react"

import './LandingPage.css';
import DevReactTexto from "./DevReactText";
import Contatos from "./Contatos";
import VerMaisBtn from "./VerMaisBtn";
import ContainerInfos from "./ContainerInfos";
import Descricao from "./Descricao";

import githubLogo from './assets/githubWhite.png' 
import phoneIcon from './assets/phoneIcon.png'
import emailIcon from './assets/emailIcon.png'
import htmlIcon from './assets/html-icon.png'
import cssIcon from './assets/css-icon.png'
import jsIcon from './assets/javascript-logo.png'
import reactJS from './assets/reactJS.png'
import nodeIcon from './assets/nodeIcon.png'
import githubBlack from './assets/githubBlack.png'
import linkedinIcon from './assets/linkedinIcon.png'

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
                        imagemURL={linkedinIcon}
                        imagemAlt="linkedin icon"
                        texto="https://www.linkedin.com/in/igor-cândido-c5/"
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
                    </div>
                </div>
                <div>
                    
                    <VerMaisBtn></VerMaisBtn>
                </div>
                
                
            </div>
            
            <div id="fundo2">
                <br></br><br></br><br></br>
                <Descricao></Descricao>
                <br></br><br></br>
                <div className="containerBackground">
                    <div className="container">
                        <img className="img um" src={htmlIcon}></img>
                        <img className="img um" src={cssIcon}></img>
                        <img className="img um" src={jsIcon}></img>
                        <img className="img dois menor" src={githubBlack}></img>
                        <img className="img dois menor" src={reactJS}></img>
                        <img className="img dois" src={nodeIcon}></img>
                    </div>

                    
                    
                </div>
            </div>
            
            <div id="fundo3">
                <br></br><br></br><br></br><br></br><br></br>
                <h2 className="projetosTitulo">PROJETOS</h2>
                <br></br>
                <ContainerInfos></ContainerInfos>
            </div>
            
        </div>
    )
}

export default LandingPage
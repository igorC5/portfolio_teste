import React from "react"

import './LandingPage.css';
import DevReactTexto from "./DevReactText";


function LandingPage(){
    return (
        <div>
            <div className="fundo1">
                <br></br><br></br><br></br><br></br>
                <div className="infosContainer">
                    <div className="leftInfos">
                        <div className="upperLeft">
                            <h1 className="meuNome">Igor Cândido</h1>
                        </div>
                        <div className="bottomLeft">
                            <img 
                                className="reactIcon"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
                                alt="react icon"
                            ></img>
                            <div className="devReactTexto">
                                <DevReactTexto></DevReactTexto>
                            </div>
                        </div>
                    </div>
                    <div className="rightInfos">
                        <p>direita</p>
                    </div>
                </div>

                
                
                
                

            </div>
            
        </div>
    )
}

export default LandingPage
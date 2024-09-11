import React from "react"

import './LandingPage.css';
import DevReactTexto from "./DevReactText";
import Contatos from "./Contatos";


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
                        <Contatos
                        imagemURL="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        imagemAlt="github icon"
                        texto="https://github.com/igorC5"
                        ></Contatos>
                        <br></br>
                        <Contatos
                        imagemURL="https://static.vecteezy.com/system/resources/previews/018/886/508/non_2x/email-line-icon-png.png"
                        imagemAlt="email icon"
                        texto="igorcandidofs@gmail.com"
                        ></Contatos>
                        <br></br>
                        <Contatos
                        imagemURL="https://i.pinimg.com/originals/88/a9/d0/88a9d0c252977e827f7f3862e8de6714.png"
                        imagemAlt="phone icon"
                        texto="+55 46 98824-3039"
                        ></Contatos>
                    </div>
                </div>

            </div>
            <div className="fundo2">
                <p></p>
            </div>
            
        </div>
    )
}

export default LandingPage
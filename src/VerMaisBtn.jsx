import './verMaisBtn.css'
import downArrow from './assets/downArrow.png'
import { useRef } from 'react'

function VerMaisBtn(){

    const fundo2 = document.getElementById("fundo2")
    
    

  


    return (
        <div>
            <div onClick={()=>{clicou()}} className="verMais">
                <span>Ver mais</span>
                <img className="downArrowImg" src={downArrow}></img>
            </div>

            
        </div>
    )
}

export default VerMaisBtn
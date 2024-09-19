import './verMaisBtn.css'
import downArrow from './assets/downArrow.png'
import { useRef } from 'react'

function VerMaisBtn({info}){

   
    
    
    const clicou = () => {
        
    }
  
    return (
        <div>
            <a className='linkVerMais' href='#fundo2'>
            <div onClick={()=>{clicou()}} className="verMais">
                <span>Ver mais</span>
                <img className="downArrowImg" src={downArrow}></img>
            </div>
            </a>

            
        </div>
    )
}

export default VerMaisBtn
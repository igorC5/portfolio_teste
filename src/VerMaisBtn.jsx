import './verMaisBtn.css'
import downArrow from './assets/downArrow.png'

function VerMaisBtn(){

    const fundo2 = document.getElementById("fundo2")
    

    function clicou(){
            
    }

    return (
        <div>
            <button onClick={()=>clicou()} className="verMais">
                    <span>Ver mais</span>
                    <img className="downArrowImg" src={downArrow}></img>
            </button>
        </div>
    )
}

export default VerMaisBtn
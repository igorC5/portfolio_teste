import './verMaisBtn.css'
import downArrow from './assets/downArrow.png'

function VerMaisBtn(){

    const fundo2 = document.getElementById("fundo2")
    
    function clicou(){
        window.scrollTo(0, 756)
    }

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
import './Contatos.css'
import { useState } from 'react'
import copyIcon from './assets/copyIcon.png'
import checkMark from './assets/checkMark.png'

function Contatos({imagemURL, imagemAlt, texto}){

    const [fundo, setFundo] = useState('none')
    const [corTexto, setCorTexto] = useState('white')
    const [mensagem, setMensagem] = useState(texto)
    const [contatoImg, setContatoImg] = useState(imagemURL)
    const [copiando, setCopiando] = useState(false)

    function copiar(msg){
        setCopiando(true)
        navigator.clipboard.writeText(msg)
        setMensagem("Copiado")
        setContatoImg(checkMark)
        setTimeout(() => {
            setFundo( "rgba(0,255,255,0)")
            setCorTexto("white")
            setMensagem(texto)
            setCopiando(false)
            setContatoImg(imagemURL)
        }, 1000);   
    }

    function mouseSaiu(){
        if (!copiando){
            
            setContatoImg(imagemURL)
            setFundo( "rgba(0,255,255,0)")
            setCorTexto("white")
            setMensagem(texto)
        }
        
    }

    function mouseMoveu(){
        setFundo("white")
        setCorTexto("black")
        setContatoImg(checkMark)
        if(mensagem != "Copiado"){
            setMensagem("Clique para copiar")
            setContatoImg(copyIcon)
        }
        
    }
    
    return (
        <div>
            <div 
                //style={{backgroundColor:fundo}} 
                style={{backgroundColor:fundo}}
                onClick={()=>{copiar(texto)}}
                onMouseMove={()=>{mouseMoveu()}}
                onMouseLeave={()=>{mouseSaiu()}}
                className="divContato">

                <div className='divToCopy'></div>
                <div className="divImagem">
                    <img 
                    className={ imagemAlt == 'github icon' && !(mensagem == 'Clique para copiar') ? 'gitImg' : 'contatoImg'} 
                    src={contatoImg}
                    alt={imagemAlt}
                    ></img>
                </div>
                <div className='divSpan'>
                    <span
                    
                   style={{color:corTexto}}
                    className={
                        imagemAlt == "linkedin icon" && !(mensagem == 'Clique para copiar' || mensagem == "Copiado")
                        ?
                        "spanLinkedin"
                        :
                        "spanTexto"
                    }
                    >{mensagem}</span>
                    
                    
                </div>
            </div>
        </div>
    ) 
}

export default Contatos

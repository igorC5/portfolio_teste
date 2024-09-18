import './Contatos.css'
import { useState } from 'react'
import copyIcon from './assets/copyIcon.png'

function Contatos({imagemURL, imagemAlt, texto}){

    const [fundo, setFundo] = useState('none')
    const [corTexto, setCorTexto] = useState('white')
    const [mensagem, setMensagem] = useState(texto)
    const [copiando, setCopiando] = useState(false)

    function mouseSaiu(){
        if (copiando){

        }else{
            setFundo( "rgba(0,255,255,0)")
            setCorTexto("white")
            setMensagem(texto)
        }
        
    }
    
    function copiar(msg){
        setCopiando(true)
        navigator.clipboard.writeText(msg)
        setMensagem("Copiado")
        setTimeout(() => {
            setFundo( "rgba(0,255,255,0)")
            setCorTexto("white")
            setMensagem(texto)
            setCopiando(false)
        }, 1000);
        
    }

    return (
        <div>
            <div 
                //style={{backgroundColor:fundo}} 
                style={{backgroundColor:fundo}}
                onClick={()=>{copiar(texto)}}
                onMouseMove={()=>{setFundo("white"), setCorTexto("black"), setMensagem("Clique para copiar")}}
                onMouseLeave={()=>{mouseSaiu()}}
                className="divContato">

                <div className='divToCopy'></div>
                <div className="divImagem">
                    <img 
                    className={ imagemAlt == 'github icon' && !(mensagem == 'Clique para copiar') ? 'gitImg' : 'contatoImg'} 
                    src={(mensagem == 'Clique para copiar') ? copyIcon : imagemURL}
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

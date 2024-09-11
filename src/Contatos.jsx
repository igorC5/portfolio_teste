import './Contatos.css'

function Contatos({imagemURL, imagemAlt, texto, isGit}){

    let sp = document.getElementsByClassName("contatoImg")[0]
    
    return (
        <div>
            <div  className="divContato">
                <div className='divToCopy'></div>
                <div className="divImagem">
                    <img 
                    className={ isGit ? 'gitImg' : 'contatoImg'} 
                    src={imagemURL}
                    alt={imagemAlt}
                    ></img>
                </div>
                <div className='divSpan'>
                    <span className='spanTexto'>{texto}</span>
                </div>
            </div>
        </div>
    ) 
}

export default Contatos

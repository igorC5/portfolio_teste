import './Contatos.css'

function Contatos({imagemURL, imagemAlt, texto}){

    let sp = document.getElementsByClassName("contatoImg")[0]
    

    

    return (
        <div>
            <div onClick={clicou()} className="divContato">
                <div className='divToCopy'></div>
                <div className="divImagem">
                    <img 
                    className='contatoImg'
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
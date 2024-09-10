import './Contatos.css'

function Contatos({imagemURL, imagemAlt, texto}){

    let sp = document.getElementsByClassName("spanTexto")[0]
    let copy = document.getElementsByClassName("divToCopy")[0]
    let divContato = document.querySelector(".divContato")

    
    function clicou(){
       
    }

    
    
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
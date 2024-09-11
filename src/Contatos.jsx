import './Contatos.css'

function Contatos({imagemURL, imagemAlt, texto}){

    let sp = document.getElementsByClassName("contatoImg")[0]
    

    try{
        switch(imagemAlt){
            case "github icon":
                sp.style.width = "50px"
                break;
            default:
                break;
        }
    }
    catch(error){
        console.log(error)
    }
    
    
    

    return (
        <div>
            <div  className="divContato">
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

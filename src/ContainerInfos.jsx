import './ContainerInfos.css'

function ContainerInfos({imagemURL}){
    return (
        <div>
            <div className='containImg'>
                <img
                    className='img'
                    src={imagemURL}
                ></img>
            </div>
        </div>
    )
}

export default ContainerInfos
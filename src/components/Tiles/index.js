import "./index.css"

const Tiles=(props)=>{

    
    const {details,onRevealButtons}=props
    const {id,image,isRevealed}=details
    const clickTiles=()=>{  
        onRevealButtons(id)
    }
    const style=isRevealed?"active-tile":"image-styles";
    return <div className="tile">
        <img src={image} alt="img" className={style} onClick={clickTiles}/>
    </div>
}
export default Tiles
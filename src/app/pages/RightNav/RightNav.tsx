import usePlayer from "../../hook/usePlayer";
import mapa from "./../../../assets/mapa.png"
import "./RightNav.css";

const RightNav = () => {

    const player = usePlayer();

    let vToReturn = '';
    let textShow = ''


    if(player.helpBox=="img"){
        vToReturn = mapa;
    }else{
        vToReturn = '';
        textShow=player.helpBox;
    }

    const changeShopDispay = () => {
        player.setCurrentOpenShop(!player.isShopOpen)
    }



    return (
        <div className="rightNav">
            <div className="helpBox">
                <img src={vToReturn} />
                {textShow}
            </div>
            <div className="shopButton">
                <button onClick={changeShopDispay}>SKLEP</button>
                
            </div>
        </div>

    )
}

export default RightNav
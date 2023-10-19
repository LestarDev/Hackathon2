import { useRef } from "react";
import usePlayer from "../../hook/usePlayer";
import mapa from "./../../../assets/mapa.png"
import "./RightNav.css";

const RightNav = () => {

    const player = usePlayer();

    let vToReturn = '';
    let textShow = '';

    const refHelpBox = useRef<HTMLDivElement>(null);


    if(player.helpBox=="img"){
        vToReturn = mapa;
        if(refHelpBox.current){
            refHelpBox.current.className="helpBox";
        }
    }else{
        vToReturn = '';
        textShow=player.helpBox;
        if(refHelpBox.current){
            refHelpBox.current.classList.add('rotation-left');
        }
        
    }

    const changeShopDispay = () => {
        player.setCurrentOpenShop(!player.isShopOpen)
    }



    return (
        <div className="rightNav">
            <div className="helpBox" ref={refHelpBox}>
                <img src={vToReturn} />
                <span>{textShow}</span>
            </div>
            <div className="shopButton">
                <button onClick={changeShopDispay}>SKLEP</button>
                
            </div>
        </div>

    )
}

export default RightNav
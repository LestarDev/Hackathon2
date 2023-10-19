import usePlayer from "../../hook/usePlayer";
import mapa from "./../../../assets/mapa.png"

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



    return (
        <div className="rightNav">
            <div className="helpBox">
                <img src={vToReturn} />
                {textShow}
            </div>
        </div>

    )
}

export default RightNav
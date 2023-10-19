import usePlayer from "../../hook/usePlayer";
import mapa from "./../../../assets/mapa.png"

const RightNav = () => {

    const player = usePlayer();

    let vToReturn = '';

    if(player.helpBox=="img"){
        vToReturn = mapa;
    }else{
        vToReturn = '';
    }

    return (
        <div className="rightNav">
            <div className="helpBox">
                <img src={vToReturn} />
            </div>
        </div>

    )
}

export default RightNav
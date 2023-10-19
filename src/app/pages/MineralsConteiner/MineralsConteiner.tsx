import usePlayer from "../../hook/usePlayer";
import "./MineralsConteiner.css";
import Mineral from "./../../shared/config/mineralInterface"

const MineralsConteiner = () => {

    const player = usePlayer();

    const returnAllMinerals = () => {
        let toReturn ='';
        console.log(player.minerals.length)
        for(let  i=0; i<player.minerals.length; i++){
            toReturn+=player.getCurrentMineral(i).nazwa+': '+player.getCurrentMineral(i).wartosc;
        }
        return toReturn;
    }

    return (
        <div className="mineralConteiner">
            {returnAllMinerals()}        
        </div>
    )
}

export default MineralsConteiner
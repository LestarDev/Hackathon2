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
            <div><img src={player.getCurrentMineral(0).img} /> <span>{player.getCurrentMineral(0).nazwa+': '+player.getCurrentMineral(0).wartosc}</span></div>
            <div><img src={player.getCurrentMineral(1).img} /><span>{player.getCurrentMineral(1).nazwa+': '+player.getCurrentMineral(1).wartosc}</span></div>
            <div><img src={player.getCurrentMineral(2).img} /><span>{player.getCurrentMineral(2).nazwa+': '+player.getCurrentMineral(2).wartosc}</span></div>
            <div><img src={player.getCurrentMineral(3).img} /><span>{player.getCurrentMineral(3).nazwa+': '+player.getCurrentMineral(3).wartosc}</span></div>
            <div><img src={player.getCurrentMineral(4).img} /><span>{player.getCurrentMineral(4).nazwa+': '+player.getCurrentMineral(4).wartosc}</span></div>
            <div><img src={player.getCurrentMineral(5).img} /><span>{player.getCurrentMineral(5).nazwa+': '+player.getCurrentMineral(5).wartosc}</span></div>
            <div><img src={player.getCurrentMineral(6).img} /><span>{player.getCurrentMineral(6).nazwa+': '+player.getCurrentMineral(6).wartosc}</span></div>
        </div>
    )
}

export default MineralsConteiner
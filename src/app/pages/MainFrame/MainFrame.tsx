import usePlayer from "../../hook/usePlayer";
import Mineral from "../../shared/config/mineralInterface";
import { useRef } from "react";
import Ruda from "../Ruda/Ruda";
import './MainFrame.css'
import bgImage from './../../../assets/mainBackground.png'

const MainFrame = () => {
    const player = usePlayer();

    console.log(player.minerals)

    const refDiv = useRef<HTMLDivElement>(null);

    const addImg = () => {
        if(refDiv.current){
            refDiv.current.style.backgroundImage=bgImage;
            console.log('xxxxxxx')
        }else{
            console.log('x')
        }
        
    }
    

    return (
        <div className="mainFrame" ref={refDiv} onLoad={addImg}>
            {player.minerals.map((mineral: Mineral) => (
                <Ruda mineral={mineral}></Ruda>
            ))}
        </div>
    )
}

export default MainFrame;
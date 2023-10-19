import usePlayer from "../../hook/usePlayer";
import Mineral from "../../shared/config/mineralInterface";
import { useRef } from "react";
import Ruda from "../Ruda/Ruda";
import './MainFrame.css'
import bgImage from './../../../assets/mainBackground.png'

const MainFrame = () => {
    const player = usePlayer();

    const refDiv = useRef<HTMLDivElement>(null);

    const addImg = () => {
        if(refDiv.current){
            refDiv.current.style.backgroundImage=bgImage;
            console.log('xxxxxxx')
        }else{
            console.log('x')
        }
        
    }

    const clickedImg = (mineralNr: number) => {
        console.log(mineralNr)
        player.addMineral(mineralNr, 1);
        player.setCurrentHelpBox(player.getCurrentMineral(mineralNr).opis)
    }
    

    return (
        <div className="mainFrame" ref={refDiv} onLoad={addImg}>
            <div className="rudaRow">
                <Ruda mineral={player.minerals[5]} onAddMaterial={() => clickedImg(5)}></Ruda>
                <Ruda mineral={player.minerals[0]} onAddMaterial={() => clickedImg(0)}></Ruda>
                <Ruda mineral={player.minerals[1]} onAddMaterial={() => clickedImg(1)}></Ruda>
            </div>
            <div className="rudaRow">
                <Ruda mineral={player.minerals[6]} onAddMaterial={() => clickedImg(6)}></Ruda>
                <Ruda mineral={player.minerals[2]} onAddMaterial={() => clickedImg(2)}></Ruda>
                <Ruda mineral={player.minerals[3]} onAddMaterial={() => clickedImg(3)}></Ruda>
            </div>
        </div>
    )
}

export default MainFrame;
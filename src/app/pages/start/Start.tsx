import { useRef } from "react";
import "./Start.css";
import mapa from "./../../../assets/lil_isle0000.png";
import machineStart from "./../../../assets/machineStart.mp3";
import machineContinue from "./../../../assets/machineContinue.mp3";
import melody1 from "./../../../assets/melody1.mp3";

const Start = () => {

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const refStart = useRef<HTMLDivElement>(null);

    const startTheGame = async () => {
        refStart.current?.classList.add('hideStart');
        const audio1 = new Audio(machineStart);
        const audio2 = new Audio(melody1)
        audio1.play().then(async el=>{
            await sleep(900);
            while(true){
                await audio2.play();
                await sleep(1);
            }
        });
        
    }

    return (
        <div className="startGame" ref={refStart}>
            <h2>Rozbiłeś się na bezludnej wyspie!</h2>
            <img src={mapa} />
            <button onClick={startTheGame}>Kliknij aby kontynuowac!</button>
        </div>
    )
}

export default Start;
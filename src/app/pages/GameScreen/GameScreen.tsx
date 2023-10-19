import Layout from "../Layout/Layout";
import Start from "../start/Start";
import Shop from "../Shop/Shop";
import "./GameScreen.css";
import usePlayer from "../../hook/usePlayer";

const GameScreen = () => {
    const player = usePlayer();

    
    return (
        <div>
            <Start />
            <Shop isOpen={player.isShopOpen}/>
            <Layout />
        </div>
    )
}

export default GameScreen;
import usePlayer from "../../hook/usePlayer"
import MainFrame from "../MainFrame/MainFrame";
import MineralsConteiner from "../MineralsConteiner/MineralsConteiner";
import "./layout.css"

const Layout = () => {
    const player = usePlayer();

    return (
        <div>
            {player.name}
            <MineralsConteiner></MineralsConteiner>
            <MainFrame></MainFrame>
        </div>
    )
}

export default Layout
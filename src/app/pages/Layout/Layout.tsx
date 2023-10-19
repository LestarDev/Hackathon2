import usePlayer from "../../hook/usePlayer"
import MainFrame from "../MainFrame/MainFrame";
import MineralsConteiner from "../MineralsConteiner/MineralsConteiner";
import RightNav from "../RightNav/RightNav";
import "./layout.css"

const Layout = () => {
    const player = usePlayer();

    return (
        <div>
            {player.name}
            <MineralsConteiner></MineralsConteiner>
            <MainFrame></MainFrame>
            <RightNav></RightNav>
        </div>
    )
}

export default Layout
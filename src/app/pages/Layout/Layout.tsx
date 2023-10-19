import usePlayer from "../../hook/usePlayer"
import MineralsConteiner from "../MineralsConteiner/MineralsConteiner";
import "./layout.css"

const Layout = () => {
    const player = usePlayer();

    return (
        <div>
            {player.name}
            <MineralsConteiner></MineralsConteiner>
        </div>
    )
}

export default Layout
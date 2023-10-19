import usePlayer from "../../hook/usePlayer"
import "./layout.css"

const Layout = () => {
    const player = usePlayer();

    return (
        <div>
            {player.name}
        </div>
    )
}

export default Layout
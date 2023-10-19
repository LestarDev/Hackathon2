import Mineral from "../../shared/config/mineralInterface"
import x from "./../../../assets/mainBackground.png"
import './Ruda.css'

const Ruda = ({mineral}: {mineral: Mineral}) => {
    return (
        <div className="ruda">
            <h3>{mineral.nazwa}</h3>
            <div className="imgWrapper">
                <img className="rudaImg" src={mineral.rudaImg} alt={mineral.nazwa} />
            </div>
        </div>
    )
}

export default Ruda
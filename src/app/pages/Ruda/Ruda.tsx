import Mineral from "../../shared/config/mineralInterface"
import x from "./../../../assets/mainBackground.png"
import './Ruda.css'

const Ruda = ({mineral}: {mineral: Mineral}) => {
    return (
        <div className="ruda">
            <h3>{mineral.nazwa}</h3>
            <img src={mineral.rudaImg} alt={mineral.nazwa} />
        </div>
    )
}

export default Ruda
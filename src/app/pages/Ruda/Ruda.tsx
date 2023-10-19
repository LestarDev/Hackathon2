import Mineral from "../../shared/config/mineralInterface"
import x from "./../../../assets/mainBackground.png"
import './Ruda.css'

const Ruda = ({mineral, onAddMaterial}: any) => {
    return (
        <div className="ruda" style={{backgroundImage: `url(${mineral.bgImg})`}}>
            <h3>{mineral.nazwa}</h3>
            <div className="imgWrapper">
                <img className="rudaImg" src={mineral.rudaImg} alt={mineral.nazwa} onClick={onAddMaterial}/>
            </div>
        </div>
    )
}

export default Ruda
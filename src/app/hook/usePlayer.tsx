import { useDispatch, useSelector } from "react-redux";
import {setName} from "./../shared/config/currentSlice"

const usePlayer = () => {

    const dispatch = useDispatch();

    const {name} = (useSelector((state) => state) as any).currency;

    const setCurrentName = (newName: string){
        dispatch(setName(newName));
    }

    return ({
        name, setCurrentName
    })
}

export default usePlayer;
import { useDispatch, useSelector } from "react-redux";
import Mineral from "../shared/config/mineralInterface";
import {setName} from "./../shared/config/currentSlice"

const usePlayer = () => {

    const dispatch = useDispatch();

    const { name, minerals } = (useSelector((state) => state) as any).currency;

    const setCurrentName = (newName: string) => {
        dispatch(setName(newName));
    };

    const getCurrentMineral: Mineral = (nr: number) => {
        return minerals[nr] as Mineral
    }

    return ({
        name, minerals, setCurrentName, getCurrentMineral
    })
}

export default usePlayer;
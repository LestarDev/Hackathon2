import { useDispatch, useSelector } from "react-redux";
import Mineral from "../shared/config/mineralInterface";
import {setName, setMinerals, setHelpBox} from "./../shared/config/currentSlice"

const usePlayer = () => {

    const dispatch = useDispatch();


    const { name, minerals, helpBox } = (useSelector((state) => state) as any).currency;

    const setCurrentName = (newName: string) => {
        dispatch(setName(newName));
    };

    const getCurrentMineral: Mineral = (nr: number) => {
        return minerals[nr] as Mineral
    }

    const addMineral = (nr: number, howMuch: number) => {
        const cloneMinerals: Mineral[] = [];
        
        for(let i=0; i<minerals.length; i++){
            if(i==nr){
                const modifitetedMaterial: Mineral = {
                    nazwa:  getCurrentMineral(i).nazwa,
                    opis: getCurrentMineral(i).opis,
                    img: getCurrentMineral(i).img,
                    wartosc: getCurrentMineral(i).wartosc+howMuch
                }
                cloneMinerals.push(modifitetedMaterial);
            }else{
                cloneMinerals.push(getCurrentMineral(i));
            }
        }

    }

    const setCurrentHelpBox = (v: string) => {
        dispatch(setHelpBox(v))
    }

    return ({
        name, minerals, helpBox, setCurrentName, getCurrentMineral,setCurrentHelpBox
    })
}

export default usePlayer;
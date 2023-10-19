import { useDispatch, useSelector } from "react-redux";
import Mineral from "../shared/config/mineralInterface";
import {setName, setMinerals, setHelpBox, setOpenShop} from "./../shared/config/currentSlice"

const usePlayer = () => {

    const dispatch = useDispatch();

    
    
    const { name, minerals, helpBox, isShopOpen } = (useSelector((state) => state) as any).currency;
    
    const setCurrentName = (newName: string) => {
        dispatch(setName(newName));
    };
    
    const getCurrentMineral: Mineral = (nr: number) => {
        return minerals[nr] as Mineral
    }

    const setCurrentOpenShop = (v: boolean) =>{
        dispatch(setOpenShop(v));
    }
    
    const addMineral = (nr: number, howMuch: number) => {
        const cloneMinerals: Mineral[] = [];
        
        for(let i=0; i<minerals.length; i++){
            if(i==nr){
                const modifitetedMaterial: Mineral = {
                    nazwa:  getCurrentMineral(i).nazwa,
                    opis: getCurrentMineral(i).opis,
                    img: getCurrentMineral(i).img,
                    wartosc: getCurrentMineral(i).wartosc+howMuch,
                    rudaImg: getCurrentMineral(i).rudaImg
                }
                cloneMinerals.push(modifitetedMaterial);
            }else{
                cloneMinerals.push(getCurrentMineral(i));
            }
        }
        dispatch(setMinerals(cloneMinerals))
        
    }
    const produceSteel = () => {
        if(minerals[0] > 0 && minerals[1] > 0){
            addMineral(0, -1);
            addMineral(1, -1);
            addMineral(4, 1);
        }
    }
    
    const setCurrentHelpBox = (v: string) => {
        dispatch(setHelpBox(v))
    }

    return ({
        name, minerals, helpBox, setCurrentName, getCurrentMineral,setCurrentHelpBox, addMineral, setCurrentOpenShop, isShopOpen, produceSteel

    })
}

export default usePlayer;
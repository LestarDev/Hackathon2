import { useDispatch, useSelector } from "react-redux";
import Mineral, { Item, mineralName } from "../shared/config/mineralInterface";
import {setName, setMinerals, setHelpBox, setOpenShop, setBoost} from "./../shared/config/currentSlice"

const usePlayer = () => {

    const dispatch = useDispatch();

    
    
    const { name, minerals, helpBox, isShopOpen, boost } = (useSelector((state) => state) as any).currency;
    
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
                    rudaImg: getCurrentMineral(i).rudaImg,
                    bgImg: getCurrentMineral(i).bgImg
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

    const getNrFromName = (n: mineralName) => {
        switch(n){
            case "Żelazo":
                return 0;
            case "Węgiel":
                return 1;
            case "Miedź":
                return 2;
            case "Srebro":
                return 3;
            case "Stal":
                return 4;
            case "Drewno":
                return 5;
            case "Złom":
                return 6;
            default:
                return 0;
        }
    }
    
    const setCurrentHelpBox = (v: string) => {
        dispatch(setHelpBox(v))
    }

    const haveEnoughToBoyItem = (item: Item) => {
        let haveEnough = true;
        item.potrzebneSurowce.forEach(sur=>{
            if(sur.cena>getCurrentMineral(getNrFromName(sur.typMineralu)).wartosc){
                haveEnough=false;
            }
        })
        return haveEnough;
    }

    const addBoost = (n: number) => {
        dispatch(setBoost(n))
    }

    return ({
        name, minerals, helpBox, boost, setCurrentName, getCurrentMineral,setCurrentHelpBox, addMineral, setCurrentOpenShop, isShopOpen, produceSteel,getNrFromName, haveEnoughToBoyItem, addBoost

    })
}

export default usePlayer;
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import Mineral from './mineralInterface'
import iron from '../components/mineraly/iron'
import coal from '../components/mineraly/coal'
import copper from '../components/mineraly/copper'
import silver from '../components/mineraly/silver'
import steel from '../components/mineraly/steel'
import wood from '../components/mineraly/wood'
import zlom from '../components/mineraly/zlom'

interface CounterState{
    name: string,
    minerals: Mineral[],
    helpBox: string,
    isShopOpen: boolean,
    boost: number
}

const initialState: CounterState = {
    name: "Naukowiec",
    minerals: [iron, coal, copper, silver, steel, wood, zlom],
    helpBox: "img",
    isShopOpen: false,
    boost: 0
}

export const currencySlice = createSlice({
    name: 'currency',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

        setName: (state, action: PayloadAction<string>) => {
            state.name=action.payload;
        },
        
        setMinerals: (state, action: PayloadAction<Mineral[]>) => {
            state.minerals=action.payload;
        },

        setHelpBox: (state, action: PayloadAction<string>) => {
            state.helpBox=action.payload;
        },

        setOpenShop: (state, action: PayloadAction<boolean>) =>{
            state.isShopOpen = action.payload;
        },

        setBoost: (state, action: PayloadAction<number>) => {
            state.boost=action.payload;
        },

    }
})

export const {setName, setMinerals, setHelpBox, setOpenShop, setBoost} = currencySlice.actions

export default currencySlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import Mineral from './mineralInterface'
import iron from '../components/mineraly/iron'
import copper from '../components/mineraly/copper'
import coal from '../components/mineraly/coal'
import zlom from '../components/mineraly/zlom'
import silver from '../components/mineraly/silver'
import wood from '../components/mineraly/wood'

interface CounterState{
    name: string,
    minerals: Mineral[]
}

const initialState: CounterState = {
    name: "Naukowiec",
    minerals: [iron, copper, coal, silver, zlom, wood]
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
    }
})

export const {setName, setMinerals} = currencySlice.actions

export default currencySlice.reducer
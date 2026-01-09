import { createSlice } from '@reduxjs/toolkit'
import { doItSuccess } from './action';

const slice =createSlice({
    name :'counter',
    initialState:{
        
        apiData: null
    },
    reducers:{
        
        triggerLog:()=>{}
    },
    extraReducers:(builder)=>{
        builder            
                .addCase(doItSuccess, (state, { payload }) => {
                                state.apiData=payload;
            })
            
    }

});

 export const {increment,triggerLog} = slice.actions;
 export default slice.reducer;


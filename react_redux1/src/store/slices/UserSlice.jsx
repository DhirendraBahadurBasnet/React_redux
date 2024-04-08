import { createSlice } from '@reduxjs/toolkit'


const UserSlice = createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser(state, action){
            state.push(action.payload)
        },
        removerUser(state, action){
            state.splice(action.payload, 2)
        },
    clearallUser(state, action){
        return []
    },
    },
    extraReducers(builder){
        builder.addCase(UserSlice.actions.clearallUser, ()=>{
            return []
        })
    }
})

export const {addUser, removerUser, clearallUser} = UserSlice.actions
export default UserSlice.reducer 
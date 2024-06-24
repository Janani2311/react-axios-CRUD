import {createSlice} from "@reduxjs/toolkit"
import { findIndexById } from "../utils/Helper"

// initializing state and reducer functions
const ProfileSlice = createSlice({
    initialState:{
        profiles:[]
    },
    name:"profile",
    reducers:{
        save:saveBlogs,
        deleteById:deleteByBlogId,
        edit:editById
    }
})

export const {save,edit,deleteById} = ProfileSlice.actions

export default ProfileSlice.reducer


function saveBlogs(state,action){
    state.profiles = action.payload
}

function deleteByBlogId(state,action){
    let index = findIndexById(state.profiles,action.payload)
    if(index !== -1){
    state.profiles.splice(index,1);
    }
    else{
        console.log("Invalid Id");
    }
    
}

function editById(state,action){
    let index = findIndexById(state.profiles,action.payload)
    state.profiles[index].status = !state.profiles[index].status
    
}

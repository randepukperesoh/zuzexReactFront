import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState:{
        users:[
            
        ],
        messages:[
            
        ],
        myUser:{
            
        }
    },
    reducers: {

        getDefaultValues( state, action ){
            state.users = action.payload.users;
            state.messages = action.payload.messages;
        },
        newUser( state, action ) {
            state.myUser = {
                id: action.payload.id, 
                idImg: action.payload.idImg, 
                name: action.payload.name
            }
        },
        allUsers( state, action ) {
            state.users = action.payload
            console.log(state.users)
        },
        newMeassage( state,action) {
            state.messages.push(action.payload)
        },
        newMyMeassage( state, action ){
            state.messages.push({user: state.myUser, message: action.payload})
        },
        newMyImgMeassage( state, action ){
            state.messages.push({user: state.myUser, type:'img', message: action.payload})
        },
    }
})

export const {getDefaultValues, newUser, allUsers, newMyMeassage, newMeassage, newMyImgMeassage} = chatSlice.actions;

export default chatSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice(
  {
    name:"user",
    initialState:null,
    reducers:{
      setUser: (state, action)=>{
        return action.payload;
      },
      clearUser: (state) => {
        return null;
      }
    }
  }
);
export const userReducer = userSlice.reducer;
export const {setUser,clearUser} = userSlice.actions;
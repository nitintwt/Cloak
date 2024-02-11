import {createSlice} from '@reduxjs/toolkit'

const initialState={
  status:false,
  userData:null,
  userName: "",
}

const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    authLogin : (state , action)=>{
      state.userData = action.payload.userData
      state.userName= action.payload.userName
    },
    authLogout : (state)=>{
      state.status=false;
      state.userData= null;
      state.userName=null
    }
  }
})

export const {authLogin , authLogout} =authSlice.actions

export default authSlice.reducer
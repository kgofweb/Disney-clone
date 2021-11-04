import { createSlice } from "@reduxjs/toolkit";

// Init state
const initialState = {
  name: '',
  email: '',
  photo: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Get users details when user is connected
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.name
      state.photo = action.payload.photo
    },

    // When user is disconnected
    setSignOutState: state => {
      state.name = null
      state.email = null
      state.photo = null
    }
  }
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions

export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email
export const selectUserPhoto = state => state.user.photo 

export default userSlice.reducer
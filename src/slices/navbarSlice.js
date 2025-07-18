import {
  createSlice
} from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    value: false,
  },
  reducers: {
    showNavbar: (state) => {
      state.value = true
    },
    hideNavbar: (state) => {
      state.value = false
    },
  },
})

export const {
  showNavbar,
  hideNavbar
} = navbarSlice.actions

export default navbarSlice.reducer
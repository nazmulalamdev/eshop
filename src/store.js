import {
    configureStore
} from '@reduxjs/toolkit'
import {
    navbarSlice
} from './slices/navbarSlice'

export default configureStore({
    reducer: {
        navbar: navbarSlice,
    },
})
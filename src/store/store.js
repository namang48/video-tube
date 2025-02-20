import {configureStore} from '@reduxjs/toolkit'
import videoSlice from './videoSlice'
import authSlice from './authSlice'

const store = configureStore({
    reducer :{
        video : videoSlice,
        auth : authSlice,
    }
})

export default store;
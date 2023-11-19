import {configureStore} from '@reduxjs/toolkit';
import data from "./slice.js"
const store = configureStore({
    reducer:data
})

export default store;
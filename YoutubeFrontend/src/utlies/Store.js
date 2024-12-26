import { configureStore } from '@reduxjs/toolkit'
import youtubeReducer from "./YoutubeDataSlice.jsx"
const Store = configureStore ({
    reducer : {
        youtubeReducer
    }    
})

export default Store
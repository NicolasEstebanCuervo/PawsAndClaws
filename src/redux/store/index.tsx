import {configureStore} from "@reduxjs/toolkit"
import AnimalSlice from "../reducers/animalSlice"
import ProductSlice  from "../reducers/productsSlice"

export default configureStore({
    reducer:({
        AnimalSlice:AnimalSlice,
        ProductSlice:ProductSlice,
    })
})
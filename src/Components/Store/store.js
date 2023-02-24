import { configureStore } from "@reduxjs/toolkit";
import  authSlice from './authreducer'
import expensesReducer from "./expensereducer";



const store = configureStore({
    reducer:{auth:authSlice.reducer,expenses:expensesReducer}
})


export default store
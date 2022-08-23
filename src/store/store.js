import {configureStore} from "@reduxjs/toolkit"
import {cardReducer} from "./reduser/like"

const store = configureStore({
  reducer:{
    card:cardReducer
  }
});

export default store;
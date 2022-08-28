import {configureStore} from "@reduxjs/toolkit"
import {cardReducer} from "./reduser/like"
import {saveReduser} from "./reduser/save"

const store = configureStore({
  reducer:{
    card:cardReducer,
    save:saveReduser
  }
});

export default store;
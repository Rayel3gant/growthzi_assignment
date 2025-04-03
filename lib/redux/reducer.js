const { combineReducers } = require("@reduxjs/toolkit");
import cartReducer from "./slices/cartSlice"
import wishlistReducer from "./slices/wishlistSlice"

const rootReducer=combineReducers({
    cart:cartReducer,
    wishlist:wishlistReducer
})

export default rootReducer
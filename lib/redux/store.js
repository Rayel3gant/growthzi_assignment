const { configureStore } = require("@reduxjs/toolkit");
const { default: rootReducer } = require("./reducer");


const store=configureStore({
    reducer:rootReducer
})

export default store
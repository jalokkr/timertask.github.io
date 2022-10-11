import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './TaskSlice';

const store = configureStore({
    reducer: {
        listOfTask : taskReducer,
    }
});

export default store;
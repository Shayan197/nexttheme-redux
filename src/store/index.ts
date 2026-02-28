import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/slices/counterSlice';
import themeReducer from '@/store/slices/themeSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

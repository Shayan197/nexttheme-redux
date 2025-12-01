import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState, ThemeName } from '@/types/theme';

const initialState: ThemeState = {
    theme: 'dark',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeName>) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

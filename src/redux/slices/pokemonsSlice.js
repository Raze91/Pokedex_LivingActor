import { createSlice } from "@reduxjs/toolkit";

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState: {
        pokemons: [],
    },
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
    },
});

export const { setPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;

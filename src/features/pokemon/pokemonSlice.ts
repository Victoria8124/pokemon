import type { PayloadAction } from "@reduxjs/toolkit";
import type { PokemonType } from "../../type/type";
import type { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = (): PokemonType[] => {
  try {
    const saved = localStorage.getItem("pokemons");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error("Ошибка при чтении покемонов из localStorage:", e);
  }
  return [];
};

const initialState = {
  pokemons: loadFromLocalStorage(),
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (
        state,
        action: PayloadAction<PokemonType[]>
      ) => {
      state.pokemons = action.payload;
      localStorage.setItem("pokemons", JSON.stringify(action.payload));
    },
    addPokemon: (
      state,
      action: PayloadAction<PokemonType[]>
    ) => {
      state.pokemons.push(...action.payload);
      localStorage.setItem("pokemons", JSON.stringify(state.pokemons));
    }
  },
});

export const { setPokemons, addPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
export const selectPokemons = (state:  RootState ) => state.pokemon.pokemons;
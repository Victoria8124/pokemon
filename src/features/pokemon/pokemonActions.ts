import { createAsyncThunk } from "@reduxjs/toolkit";
import type { PokemonType } from "../../entities/pokemon/model/pokemonTypes";
import { pokemonService } from "../pokemon/pokemonService";
import axios from "axios";

export const pokemonRandom = createAsyncThunk<PokemonType[], void>(
  "pokemon/pokemonRandom",
  async (_, { rejectWithValue }) => {
    try {
      const saved = localStorage.getItem("pokemons");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed as PokemonType[];
        }
      }
      const data = await pokemonService.getRandomPokemon();
      if (!data) {
        return rejectWithValue("Ошибка при получении покемона");
      }
      const arrayData = [data];

      return arrayData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("different error than axios");
      }
    }
  }
);

export const addPokemonButton = createAsyncThunk<PokemonType[], void>(
  "pokemon/addPokemonButton",
  async (_, { rejectWithValue }) => {
    try {
      const data = await pokemonService.getRandomPokemon();
      if (!data) {
        return rejectWithValue("Ошибка при получении покемона");
      }
      const arrayData = [data];
      return arrayData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("different error than axios");
      }
    }
  }
);

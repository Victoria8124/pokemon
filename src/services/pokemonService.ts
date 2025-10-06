import { pokeApi } from "../api/api.pokemon";
import type { PokemonType } from "../type/type";

export const pokemonService = {
  async getRandomPokemon(): Promise<PokemonType | null> {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    try {
      const response = await pokeApi.get<PokemonType>(`pokemon/${randomId}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Ошибка при получении покемона:", error);
      return null;
    }
  },
};

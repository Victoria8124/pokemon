import { pokeApi } from "../../entities/pokemon/api/api.pokemon";
import type { PokemonType } from "../../entities/pokemon/model/pokemonTypes";

export const pokemonService = {
  async getRandomPokemon(): Promise<PokemonType | null> {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    try {
      const response = await pokeApi.get<PokemonType>(`pokemon/${randomId}`);
      const data = response.data;
      const coins = Math.floor(Math.random() * 10) + 1;
      const newData = { ...data, incomePerSecond: coins };
      console.log(data);
      return newData;
    } catch (error) {
      console.error("Ошибка:", error);
      return null;
    }
  },
};

import axios from "axios";
import type { ItemType, DetailedItem } from "../shared/type/type";
export const queryService = {
  async getItems(query: string): Promise<DetailedItem[]> {
    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/item?limit=1000"
      );
      const foundItem = data.results.filter((item: ItemType) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });

      const datailedItems = await Promise.all(
        foundItem.map(async (item: ItemType) => {
          const res = await axios.get(item.url);
          return {
            name: item.name,
            image: res.data.sprites?.default || null,
          };
        })
      );
      return datailedItems;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

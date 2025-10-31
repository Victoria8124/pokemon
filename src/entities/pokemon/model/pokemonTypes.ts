export interface PokemonType {
  id: number;
  name: string | null;
  weight: number | null;
  sprites: {
    front_default: string | null;
  };
  incomePerSecond: number | null;
}

export interface PokemonCardProps {
  pokemon: PokemonType;
}

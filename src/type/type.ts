export interface IUser {
    email: string;
    password: string;
}

export interface IAuthResponse {
    access_token: string;
}

export interface AuthState {
  access_token: string | null;
}

export interface MoneyState {
    balance: number;
}

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

export interface ItemType {
  name: string;
  url: string;
}

export interface DetailedItem {
  name: string;
  image?: string | null;
}

export interface QueryState  {
  queryItems: DetailedItem[],
};

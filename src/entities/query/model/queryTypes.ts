export interface ItemType {
  name: string;
  url: string;
}

export interface DetailedItem {
  name: string;
  image?: string | null;
}

export interface QueryState {
  queryItems: DetailedItem[];
}

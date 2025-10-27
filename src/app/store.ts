import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import moneyReducer from "../features/money/moneySlice";
import pokemonReducer, {
  addPokemon,
  setPokemons,
} from "../features/pokemon/pokemonSlice";
import { addMoney } from "../features/money/moneySlice";
import { isAnyOf } from "@reduxjs/toolkit";
import { pokemonRandom, addPokemonButton } from "../features/pokemon/pokemonActions";
import queryReducer from "../features/query/querySlice";

export const listenerMiddleware = createListenerMiddleware();

let intervalId: ReturnType<typeof setInterval> | null = null;

listenerMiddleware.startListening({
  matcher: isAnyOf(addPokemon, setPokemons, addPokemonButton.fulfilled, pokemonRandom.fulfilled),
  effect: (action, listenerApi) => {
    console.log(action.payload);
    if (intervalId) return;

    intervalId = setInterval(() => {
      const state = listenerApi.getState() as RootState;

      const totalIncomePerSecond = state.pokemon.pokemons.reduce(
        (sum, p) => sum + (p.incomePerSecond || 0),
        0
      );
      listenerApi.dispatch(addMoney(totalIncomePerSecond));
    }, 1000);
  },
});


export const store = configureStore({
  reducer: {
    auth: authReducer,
    money: moneyReducer,
    pokemon: pokemonReducer,
    query: queryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

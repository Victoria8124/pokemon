import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import moneyReducer from "../features/money/moneySlice";
import pokemonReducer, {
  addPokemon,
  setPokemons,
} from "../features/pokemon/pokemonSlice";
import { addMoney } from "../features/money/moneySlice";
import { isAnyOf } from "@reduxjs/toolkit";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(addPokemon, setPokemons), 
  effect: (action, listenerApi) => {
      console.log(action.payload); 
    if ((listenerApi as any).intervalId) return;

    const intervalId = setInterval(() => {
      const state = listenerApi.getState() as RootState;

      const totalIncomePerSecond = state.pokemon.pokemons.reduce(
        (sum, p) => sum + (p.incomePerSecond || 0),
        0
      );
        listenerApi.dispatch(addMoney(totalIncomePerSecond));

    }, 1000);

    (listenerApi as any).intervalId = intervalId;
  },
});


export const store = configureStore({
  reducer: {
    auth: authReducer,
    money: moneyReducer,
    pokemon: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

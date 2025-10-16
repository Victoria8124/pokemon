import "./Pokemon.module.scss";
import { useEffect } from "react";
import styles from "./Pokemon.module.scss";
import PokemonCrd from "./PokemonCard";
import { useAppDispatch } from "../../hooks";
import { useAppSelector } from "../../hooks";
import { pokemonRandom } from "../../../features/pokemon/pokemonActions";
import { addPokemonButton } from "../../../features/pokemon/pokemonActions";

const Pokemon = () => {
  const dispatch = useAppDispatch();
  const { pokemons } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(pokemonRandom());
  }, [dispatch]);

  const addPokemonHandler = () => {
    dispatch(addPokemonButton());
  };

  return (
    <div className={styles.pokemonWrapper}>
      <h1 className={styles.pokemonTitle}>My Pokemons</h1>
      <button onClick={addPokemonHandler}>добавить покемона</button>
      {pokemons.length === 0 ? (
        <p>Загрузка...</p>
      ) : (
        <div className={styles.pokemonContainer}>
          {pokemons.map((p) => (
            <PokemonCrd key={p.id} pokemon={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokemon;

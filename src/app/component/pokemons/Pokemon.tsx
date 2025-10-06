import "./Pokemon.module.scss";
import { useState, useEffect } from "react";
import {pokemonService} from "../../../services/pokemonService";
import type { PokemonType } from "../../../type/type";
import styles from './Pokemon.module.scss'
import PokemonCrd from './PokemonCard'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);

useEffect(() => {
  const loadPokemon = async () => {
    const savedPokemon = localStorage.getItem("pokemon");
    if (savedPokemon) {

      setPokemon(JSON.parse(savedPokemon));
    } else {
      try {
       const data = await pokemonService.getRandomPokemon();
        setPokemon(data);
        localStorage.setItem("pokemon", JSON.stringify(data));
      } catch (error) {
        console.error("ошибка", error);
      }
    }
  };

  loadPokemon();
}, []);
  return (
    <div className={styles.pokemonWrapper}>
      <h1 className={styles.pokemonTitle}>My Pokemons</h1>
      {!pokemon ? (
        <p>Загрузка...</p>
      ) : (
        <PokemonCrd pokemon={pokemon}/>
      )}
    </div>
  );
};

export default Pokemon;

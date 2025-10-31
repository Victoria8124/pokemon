import type { PokemonCardProps } from "../../entities/pokemon/model/pokemonTypes";
import styles from "./Pokemon.module.scss";

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className={styles.pokemonCard}>
      <div className={styles.pokemonItem}>
        <p>{pokemon.name}</p>
        <button className={styles.pokemonButton}>
          <img src="/public/setting.png" alt="setting" />
        </button>
      </div>
      {pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt="setting" />
      )}
      <div className={styles.pokemonItem}>
        <p>вес</p>
        <p>{pokemon.weight}</p>
      </div>
      <div className={styles.pokemonItem}>
        <p>денег/сек</p>
        <p>{pokemon.incomePerSecond}</p>
      </div>
    </div>
  );
};
export default PokemonCard;

import Navbar from "../../components/Navbar/Navbar";
import { getPokemonsByTypes } from "../../services/Pokemon/Pokemon";
import { TypesAPI } from "../../services/apis/apis";
import { typesEnum } from "../../services/tools/typesEnum";
import { TypesPins } from "../../services/tools/TypesPins";
import { useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import styles from "./Types.module.css"

const Types = () => {
    const [pokemons, setPokemons] = useState(null);

    const handleTypeClick = (type) => {
        getPokemonsByTypes(`${TypesAPI}/${type}`).then((res) => {
            Promise.all(res).then((subRes) => {
                setPokemons(subRes);
            });
        });
    };

    return (
        <main>
            <Navbar />

            <div className={styles.typesCtnr}>
                {typesEnum.map((item, key) => (
                    <span
                        key={key}
                        style={{ backgroundColor: TypesPins(item) }}
                        onClick={() => handleTypeClick(item)}
                    >
                        {item}
                    </span>
                ))}
            </div>

            <section className={styles.pokemonsCtnr}>
                {pokemons && pokemons.map((item, key) => {
                    if (item) {
                        return <PokeCard key={key} pokemon={item} />;
                    }
                })}
            </section>
        </main>
    );
};

export default Types;

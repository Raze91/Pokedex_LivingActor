import React, { useState, useEffect } from "react";
import PokeCard from "../../components/PokeCard";
import { getPokemons } from "../../services/Pokemon/Pokemon";
import "./Home.css";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons().then((res) =>
            Promise.all(res).then((pokemons) => {
                setPokemons(pokemons);
                setIsLoading(false);
            })
        );
    }, []);

    return (
        <>
            {isLoading ? (
                <p>Loading ...</p>
            ) : (
                <section>
                    {pokemons.length > 0 &&
                        pokemons.map((pokemon, key) => (
                            <PokeCard pokemon={pokemon} key={key} />
                        ))}
                </section>
            )}
        </>
    );
};

export default Home;

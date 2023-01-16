import React, { useState, useEffect } from "react";
import { getPokemons } from "../services/Pokemon/Pokemon";
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [pagination, setPagination] = useState({ prev: null, next: null });
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
            {isLoading && <p>Chargement ...</p>}
            {pokemons.length > 0 &&
                pokemons.map((pokemon) => <p>{pokemon.name}</p>)}
        </>
    );
};

export default Home;

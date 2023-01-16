import React, { useState, useEffect } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import Pagination from "../../components/Pagination/Pagination";
import { getPokemons } from "../../services/Pokemon/Pokemon";
import { PokemonAPI } from "../../services/apis/apis";
import "./Home.css";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [pagination, setPagination] = useState({ prev: null, next: null });

    useEffect(() => {
        getPokemons(PokemonAPI).then((res) => {
            Promise.all(res.pokemons).then((pokemons) => {
                setPokemons(pokemons);
                setPagination({ prev: res.previous, next: res.next });
                setIsLoading(false);
            });
        });
    }, []);

    const handlePagination = (url) => {
        getPokemons(url).then((res) => {
            Promise.all(res.pokemons).then((pokemons) => {
                setPokemons(pokemons);
                setPagination({ prev: res.previous, next: res.next });
                setIsLoading(false);
            });
        });
    };

    return (
        <main>
            {isLoading ? (
                <p>Loading ...</p>
            ) : (
                <>
                    <Pagination
                        pagination={pagination}
                        handlePagination={handlePagination}
                    />

                    <section className="pokemons-ctnr">
                        {pokemons.length > 0 &&
                            pokemons.map((pokemon, key) => (
                                <PokeCard pokemon={pokemon} key={key} />
                            ))}
                    </section>

                    <Pagination
                        pagination={pagination}
                        handlePagination={handlePagination}
                    />
                </>
            )}
        </main>
    );
};

export default Home;

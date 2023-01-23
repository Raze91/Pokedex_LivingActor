import React, { useState, useEffect } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import Pagination from "../../components/Pagination/Pagination";
import Navbar from "../../components/Navbar/Navbar";
import { getPokemons } from "../../services/Pokemon/Pokemon";
import { PokemonAPI } from "../../services/apis/apis";

import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "../../redux/slices/pokemonsSlice";
import { setPagination } from "../../redux/slices/paginationSlice";
import styles from "./Home.module.css";

const Home = () => {
    const dispatch = useDispatch();

    const pokemonList = useSelector((state) => state.pokemons.pokemons);
    const pagination = useSelector((state) => state.pagination);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (pokemonList.length === 0 || pagination.prev !== null) {
            getPokemons(PokemonAPI).then((res) => {
                Promise.all(res.pokemons).then((pokemons) => {
                    dispatch(setPokemons(pokemons));
                    dispatch(
                        setPagination({ prev: res.previous, next: res.next })
                    );
                    setIsLoading(false);
                });
            });
        } else {
            setIsLoading(false);
        }
    }, []);

    const handlePagination = (url) => {
        getPokemons(url).then((res) => {
            Promise.all(res.pokemons).then((pokemons) => {
                dispatch(setPokemons(pokemons));
                dispatch(setPagination({ prev: res.previous, next: res.next }));
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
                    <Navbar />
                    <Pagination handlePagination={handlePagination} />

                    <section className={styles.pokemonsCtnr}>
                        {pokemonList.length > 0 ? (
                            pokemonList.map((pokemon, key) => (
                                <PokeCard pokemon={pokemon} key={key} />
                            ))
                        ) : (
                            <p>Une erreur est survenue ...</p>
                        )}
                    </section>

                    <Pagination handlePagination={handlePagination} />
                </>
            )}
        </main>
    );
};

export default Home;

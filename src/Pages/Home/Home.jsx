import React, { useState, useEffect } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import Pagination from "../../components/Pagination/Pagination";
import { getPokemons } from "../../services/Pokemon/Pokemon";
import { PokemonAPI } from "../../services/apis/apis";
import "./Home.css";

import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "../../redux/slices/pokemonsSlice";
import { setPagination } from "../../redux/slices/paginationSlice";

const Home = () => {
    const dispatch = useDispatch();

    const pokemonList = useSelector((state) => state.pokemons.pokemons);
    const pagination = useSelector((state) => state.pagination);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPokemons(PokemonAPI).then((res) => {
            Promise.all(res.pokemons).then((pokemons) => {
                dispatch(setPokemons(pokemons));
                dispatch(setPagination({ prev: res.previous, next: res.next }));
                setIsLoading(false);
            });
        });
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
                    <Pagination
                        pagination={pagination}
                        handlePagination={handlePagination}
                    />

                    <section className="pokemons-ctnr">
                        {pokemonList.length > 0 &&
                            pokemonList.map((pokemon, key) => (
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

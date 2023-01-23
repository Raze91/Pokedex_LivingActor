import axios from "axios";

export const getPokemons = async (url) => {
    return axios.get(url).then((res) => {
        const pokemons = res.data.results.map((item) => {
            return axios.get(item.url).then((subRes) => {
                return subRes.data;
            });
        });

        return {
            pokemons: pokemons,
            previous: res.data.previous,
            next: res.data.next,
        };
    });
};

export const getPokemonsByTypes = async (url) => {
    const res = await axios.get(url);
    return res.data.pokemon.slice(0, 20).map((item) => {
        return axios.get(item.pokemon.url).then((subRes) => {
            return subRes.data;
        });
    });
};

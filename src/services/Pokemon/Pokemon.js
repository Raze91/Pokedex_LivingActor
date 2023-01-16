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

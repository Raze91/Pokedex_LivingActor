import axios from "axios";

export const getPokemons = async () => {
    return axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
        return res.data.results.map((item) => {
            return axios.get(item.url).then((subRes) => {
                return subRes.data;
            });
        });
    });
};

import React from "react";
import "./PokeCard.css";
import { TypesPins } from "../services/tools/TypesPins";

const PokeCard = ({ pokemon }) => {
    return (
        <div className="card">
            <img
                src={pokemon.sprites.other["official-artwork"]["front_default"]}
            />
            <h3 className="title">{pokemon.name}</h3>
            <div className="types">
                {pokemon.types.map((type, key) => (
                    <span
                        key={key}
                        style={{ backgroundColor: TypesPins(type.type.name) }}
                    >
                        {type.type.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PokeCard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Card/Card.css";

function useDataCard() {
    const cheminFichierJSON = "http://localhost:3000/data.json";
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(cheminFichierJSON)
            .then((response) => {
                setData(response.data.slice(0, 6)); // Limite à 6 éléments
            })
            .catch((error) => {
                console.error(
                    "Erreur lors du chargement du fichier JSON:",
                    error
                );
            });
    }, []);

    return data;
}


function Card() {
    const data = useDataCard();

    const carres = data.map((item, index) => (
        <div className="cardRed">
            <h2>{item.title}</h2>
        </div>
    ));

    return <section className="conteneur conteneur__card">{carres}</section>;
}

export default Card;

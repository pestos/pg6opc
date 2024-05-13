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

function Carre({ title }) {
    return (
        <div className="cardRed">
            <h2>{title}</h2>
        </div>
    );
}

function Card() {
    const data = useDataCard();

    const carres = data.map((item, index) => (
        <Carre key={index} title={item.title} />
    ));

    return <div className="conteneur conteneur__card">{carres}</div>;
}

export default Card;

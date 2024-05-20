import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button";

function FormAppartment() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/data.json`)
            .then((response) => {
                const appartment = response.data.find((item) => item.id === id);

                // Pour vérifier que l'ID est correctement récupéré
                setData(appartment);
                console.log(appartment);
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des données:", error);
            });
    }, [id]);

    if (!data) {
        return <div>Chargement des données ou appartement non trouvé...</div>;
    }

    return (
        <Button
            rating={data.rating}
            images={data.pictures}
            title={data.title}
            host={data.host.name}
            picture={data.host.picture}
            location={data.location}
            tags={data.tags[0]}
            tags2={data.tags[1]}
            tags3={data.tags[2]}
            description={data.description}
            equipments={data.equipments}
        />
    );
}

export default FormAppartment;

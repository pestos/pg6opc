import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import "./logement.scss";
import { getData } from "../../services/apiService";
import Tags from "../../components/Tags";
import StarRating from "../../components/Stars";
import Host from "../../components/Host";
import Description from "../../components/Description";

function FormAppartment() {
    const { id } = useParams(); // Utilisez useParams pour obtenir l'ID de l'URL
    const [data, setData] = useState(null); // Initialiser avec null

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();
                if (Array.isArray(result)) {
                    const apartmentData = result.find(
                        (apartment) => apartment.id === id
                    );
                    if (apartmentData) {
                        setData(apartmentData);
                    } else {
                        throw new Error("Aucune donnée trouvée pour cet ID");
                    }
                } else {
                    throw new Error("Le format des données est incorrect");
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données",
                    error
                );
            }
        };

        fetchData();
    }, [id]); // Ajouter id comme dépendance pour recharger les données si l'ID change

    if (!data) {
        // Afficher un message de chargement ou autre pendant que les données se chargent
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <Slideshow slide={data.pictures} />
            <section className="sectionContainer">
                <Description title={data.title} location={data.location} />
                <Host host={data.host.name} picture={data.host.picture} />
                <div className="container__Tagstar">
                    <Tags data={data.tags} />
                </div>
                <div className="star-rating">
                    <StarRating rating={data.rating} />
                </div>
                <div className="container__Collapse">
                    <Collapse title="Description" children={data.description} />
                    <Collapse title="Equipements">
                        <ul>
                            {data.equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </section>
        </div>
    );
}

export default FormAppartment;

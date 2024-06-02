import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import FormTags from "../../components/FormTags";
import Collapse from "../../components/Collapse";
import "./information.scss";
import { getData } from "../../services/apiService";
import Tag from "../../components/Tag";
import StarRating from "../../components/Star";
import Host from "../../components/Host";

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
        <div className="conteneur">
            <Slideshow slide={data.pictures} />
            <section className="sectionConteneur">
                <FormTags title={data.title} location={data.location} />
                <Host host={data.host.name} picture={data.host.picture} />
                <div className="conteneur__Tagstar">
                    <Tag data={data.tags} />
                </div>
                <div className="star-rating">
                    <StarRating rating={data.rating} />
                </div>
                <div className="conteneur__Collapse">
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

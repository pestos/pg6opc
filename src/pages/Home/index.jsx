import React, { useEffect, useState } from "react";
import "../Home/Home.scss";
import "../../layout/Header/Header.scss";
import { getData } from "../../services/apiService";

import Banner from "../../components/Banner/index.jsx";
import Card from "../../components/Card/index.jsx";
import Image from "../../components/Banner/bannerImage.png";

function Home() {
    const [data, setData] = useState([]);
    const texte = "Chez vous, partout et ailleurs";
    const fileCss = "banner-image";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();
                if (Array.isArray(result)) {
                    setData(result);
                } else {
                    throw new Error("Le format est incorrect");
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données",
                    error
                );
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <Banner bannerImage={Image} texte={texte} className={fileCss} />
            <section className="container__card">
                {data.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </section>
        </div>
    );
}

export default Home;

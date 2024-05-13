
import "../Home/index.css";
import "../../layout/Header/Header.css";


import Banner from "../../components/Banner/index.jsx";
import Card from "../../components/Card/index.jsx"
import Image from "../../assets/bannerImage.png"

function Home() {
    const texte = "Chez vous, partout et ailleurs"
    const fileCss = "banner-image"
    return (
        <div className="conteneur">
            <Banner bannerImage={Image} texte={texte} className={fileCss} />
            <Card />
        </div>
    );
}

export default Home;

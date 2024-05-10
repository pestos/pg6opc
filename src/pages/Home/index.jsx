
import "../../styles/index.css";
import "../../styles/Header.css"
import "../../styles/BannerImage.css"

import Banner from "../../components/Banner/index.jsx";
import Card from "../../components/Card/index.jsx"
import Image from "../../assets/bannerImage.png"

function Home() {
    const texte = "Chez vous, partout et ailleurs"
    const fileCss = "banner-image"
    return (
        <div>
        <Banner bannerImage = {Image} texte ={texte} className ={fileCss} />
        <Card />
        </div>
    );
}

export default Home;
